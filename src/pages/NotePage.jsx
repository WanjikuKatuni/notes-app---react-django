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
// SUBMIT UPDATED NOTE
  function handleSubmit(){
    updateNote()
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <AiOutlineLeft onClick={handleSubmit} /> 
          </Link>
        </h3>
      </div>
      <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} value={note.body}></textarea>
    </div>
  );
};
