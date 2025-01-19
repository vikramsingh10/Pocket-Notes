import React, { useState } from "react";
import "./CreateGroupPopup.css";

function CreateGroupPopup({ addGroup, setShowPopup }) {
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("#ccc");

  const handleCreateGroup = () => {
    if (groupName.trim()) {
      addGroup({ name: groupName, color: groupColor, notes: [] });
      setShowPopup(false);
    }
  };

  return (
    <div className="popup" onClick={() => setShowPopup(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3>Create New Group</h3>
        <label>Group Name </label>
        <input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <div className="color-picker">
          <label>Choose Color</label>
          {[
            "#7e57c2",
            "#64b5f6",
            "#4caf50",
            "#ffeb3b",
            "#ff5722",
            "#e91e63",
          ].map((color) => (
            <span
              key={color}
              className={`color-option ${
                color === groupColor ? "selected" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setGroupColor(color)}></span>
          ))}
        </div>
        <div className="button">
          <button onClick={handleCreateGroup}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupPopup;
