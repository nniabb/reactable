import React from "react";

function UserTable({ usersArray }) {
  return (
    <tbody>
      {usersArray.map((value, key) => {
        return (
          <tr key={key}>
            <td>{value.name}</td>
            <td>{value.age}</td>
            <td>
              <img src={value.profileImage} alt={value.name} />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default UserTable;
