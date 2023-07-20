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

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <AiOutlineLeft />
          </Link>
        </h3>
      </div>
      <textarea value={note.body}></textarea>
    </div>
  );
};
