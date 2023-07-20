import React from "react";
import { Link } from "react-router-dom";


// format date displayed
function getFormatDate(note){
  return new Date(note.updated).toLocaleDateString()
}
// get title of note
function getTitle(note){
  let title = note.body.split(`\n`)[0]

  if(title.length > 45){
    return title.slice(0,45)
  }
  return title
}
// note content
function getContent(note){
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, "")

  if(content.length > 45){
    return content.slice(0,45)
  } else {
    return content
  }

}
export const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/note/${note.id}`}>
        <div className="notes-list-item">
            <h3>{getTitle(note)}</h3>
            <p><span>{getFormatDate(note)}</span>{getContent(note)}</p>
        </div>
      </Link>
    </div>
  );
};
