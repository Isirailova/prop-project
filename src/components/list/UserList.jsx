import React from "react";
import UserItem from "../item/UserItem";

const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserItem key={user.id} name={user.name} age={user.age} />
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
