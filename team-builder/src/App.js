import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [team, setTeam] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});

  const addMember = member => {
    setTeam([...team, member]);
  };

  const editMember = (member, index) => {
    const tempTeam = [...team];
    tempTeam.splice(index, 1, member);
    setTeam(tempTeam);
  };

  return (
    <div className="App">
      <h2>These are our team members</h2>
      {team.map((member, index) => (
        <div key={member.email}>
          <p>{member.name}</p>
          <button
            onClick={() => setSelectedMember({ ...member, index: index })}
          >
            Edit
          </button>
        </div>
      ))}
      <Form addMember={addMember} />
      <Form edit oldMember={selectedMember} editMember={editMember} />
    </div>
  );
}

export default App;
