import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NoteList from "./components/NoteList";
import CreateGroupPopup from "./components/CreateGroupPopup";
import "./App.css";

function App() {
  const [groups, setGroups] = useState(
    JSON.parse(localStorage.getItem("groups")) || []
  );
  const [activeGroup, setActiveGroup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const addGroup = (group) => {
    const updatedGroups = [...groups, group];
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  const addNote = (note) => {
    const updatedGroups = groups.map((group) => {
      if (group.name === activeGroup.name) {
        const updatedGroup = { ...group, notes: [...group.notes, note] };
        setActiveGroup(updatedGroup);
        return updatedGroup;
      }
      return group;
    });

    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  return (
    <div className="app">
      <Sidebar
        groups={groups}
        setActiveGroup={setActiveGroup}
        setShowPopup={setShowPopup}
      />
      <div className="main-content">
        {activeGroup ? (
          <NoteList
            activeGroup={activeGroup}
            addNote={addNote}
            groupColor={activeGroup.color}
          />
        ) : (
          <div className="placeholder">
            <img
              src="https://s3-alpha-sig.figma.com/img/f2b5/d356/00b6d4748cd536df01bd2b4fecc1d821?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfQR3vqqO9Hwzxtx-MkI44tAhDebMQVPitweha1WjhgTLw764IXurUsVqjR2Ql3b6VSNghWTTgaPWgeG-M1-5v88wekaD32W9DCgEUVtpfTzeppQaznJEvCcD~4wtLIokhn78EI5~uCZ1~FwMBf-aDLN0iqqJIEjxr67HJKZWwsaq~LrJTWqOA0b9wW2doyn1GSS4r1PVQjRCtIyfgIxJ-mttE3gQFC07G6YxuDshDopRLlhytwZ-NxKrlz2whNQ~lAywYBO3w6y6Yk8GVKQCVASndqxARBbOFnabJck81tx~WNzuuoCYVVdNecZtHx49Nn9eQD82JPvyVgemYvvWQ__"
              alt="NoteApp"
            />
            <h1>Pocket Notes</h1>
            <p>
              Send and receive messages without keeping your phone online <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
            <div className="encrypted-text">
            <i class="fa-solid fa-lock"></i>end to end encrypted</div>
          </div>
        )}
      </div>
      {showPopup && (
        <CreateGroupPopup addGroup={addGroup} setShowPopup={setShowPopup} />
      )}
    </div>
  );
}

export default App;
