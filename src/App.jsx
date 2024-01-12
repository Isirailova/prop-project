import React from "react";
import Header from "./components/header/Header";

import "./App.css";

const App = () => {
  const users = [
    { id: 1, name: "Aida", age: 28 },
    { id: 2, name: "Azim", age: 20 },
    { id: 3, name: "Janara", age: 24 },
    { id: 4, name: "Meerim", age: 27 },
    { id: 5, name: "Dastan", age: 27 },
    { id: 6, name: "Erkinai", age: 22 },
    { id: 7, name: "Tima", age: 33 },
    { id: 8, name: "Aigerim", age: 28 },
  ];

  return (
    <div className="App">
      <Header />
      <h1>Student List</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
