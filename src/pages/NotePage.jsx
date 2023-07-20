import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import notes from '../assets/data';
import { AiOutlineLeft } from "react-icons/ai";

export const NotePage = () => {
  const  params  = useParams();

  // const note = notes.find(note => note.id === Number(id))

  let [note, setNote] = useState([]);

  useEffect(() => {
    getNote()
  }, []);

  async function getNote() {
    if(params.id === 'new') return

    try {
      const response = await fetch(`http://localhost:4000/notes/${params.id}`);
      const jsonData = await response.json();
      setNote(jsonData);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  }
// UPDATE NOTE
  async function updateNote(){
    await fetch(`http://localhost:4000/notes/${params.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...note, 'updated':new Date()})
    });

  }

//   delete
async function deleteNote(){
    await fetch(`http://localhost:4000/notes/${params.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(note)
    })
}


// create note
async function createNote(){
    console.log('create note')
    await fetch(`http://localhost:4000/notes/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...note, 'updated':new Date()})
    })
}
// SUBMIT UPDATED NOTE
  function handleSubmit(){
    // delete after edit removes all info
    if(params.id !== 'new' && !note.body){
        deleteNote()
    }else if(params.id !== 'new'){
        updateNote()
    } else if(params.id === 'new' && note !== null){
        createNote()

    }

    // // update note logic
    // updateNote()
  }



  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <AiOutlineLeft onClick={handleSubmit} /> 
          </Link>
        </h3>

        {params.id !== 'new' ? (

        <Link to='/'>
            <button onClick={deleteNote}>Delete</button>
        </Link>
        ):(
        <Link to='/'>
            <button onClick={handleSubmit}>Done</button>
        </Link>
        )}
      </div>
      <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} value={note.body}></textarea>
    </div>
  );
};
