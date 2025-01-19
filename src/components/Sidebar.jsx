import React from "react";
import "./Sidebar.css";

function Sidebar({ groups, setActiveGroup, setShowPopup }) {
  const getGroupInitials = (groupName) => {
    if (!groupName || groupName.trim() === "") {
      return "";
    }
    const words = groupName.trim().split(" ");
    if (words.length === 1) {
      return words[0][0].toUpperCase();
    } else {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
  };

  return (
    <div className="sidebar">
      <h2>Pocket Notes</h2>
      <ul>
        {groups.map((group, index) => (
          <li
            key={index}
            onClick={() => setActiveGroup(group)}
            style={{
              padding: "10px",
              margin: "5px 0",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
            <div
              className="group-initials"
              style={{ backgroundColor: group.color }}>
              {getGroupInitials(group.name)}
            </div>

            <span>{group.name}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowPopup(true)}>+</button>
    </div>
  );
}

export default Sidebar;
