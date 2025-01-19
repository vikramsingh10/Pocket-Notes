import React, { useState } from "react";
import "./NoteList.css";

function NoteList({ activeGroup, addNote, groupColor }) {
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim()) {
      const newNote = {
        text: noteText,
        date: new Date().toLocaleString(),
      };
      addNote(newNote);
      setNoteText("");
    }
  };

  const getGroupInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    return words.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  return (
    <div className="note-list">
      <div className="heading">
        {activeGroup && (
          <div
            className="group-initials"
            style={{ backgroundColor: groupColor }}>
            {getGroupInitials(activeGroup.name)}
          </div>
        )}
        <h2>{activeGroup.name}</h2>
      </div>
      <div className="notes">
        {activeGroup.notes.map((note, index) => (
          <div className="note" key={index}>
            <p>{note.text}</p>
            <span>{note.date}</span>
          </div>
        ))}
      </div>
      <div className="add-note">
        <input
          type="text"
          placeholder="Type your note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleAddNote} disabled={!noteText.trim()}>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
}

export default NoteList;
