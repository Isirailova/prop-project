import React from "react";

const UserItem = ({ name, age }) => {
  return (
    <li>
      {name}
      {age}
    </li>
  );
};

export default UserItem;
