import React from 'react'
import {AiOutlineFileAdd} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const AddButton = () => {
  return (
    <div>
        <Link to='/note/new' className='floating-button'>
            <AiOutlineFileAdd/>
        </Link>
    </div>
  )
}
