import React from 'react'
import { Link, useParams } from 'react-router-dom'
import notes from '../assets/data';
import {AiOutlineLeft} from 'react-icons/ai'

export const NotePage = () => {

    const {id} = useParams();
    // console.log(id)
    const note = notes.find(note => note.id === Number(id))
    // console.log(note)
    

  return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to='/'>
                    <AiOutlineLeft/>
                </Link>
            </h3>
        </div>
        <textarea value={note.body}></textarea>
    </div>
  )
}
