import React, { useEffect, useState } from 'react'
// import notes from '../assets/data'
import { ListItem } from '../components/ListItem'

export const NotesListPage = () => {


  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  async function getNotes(){
    try {
      const response = await fetch('http://localhost:4000/notes');
      const jsonData = await response.json();
      setNotes(jsonData)
    } catch (error) {
      console.error('error fetching data:', error)
    }
    

  } 
  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem key={index} note={note}/>
            ))}
        </div>
    </div>
  )
}
