import React from "react";
import UserCard from "./UserCard";

const UsersList = ({
  users,
  deleteUser,
  setupdatingUser,
  handleClickShowModal,
}) => {
  return (
    <section className="app__container">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setupdatingUser={setupdatingUser}
          handleClickShowModal={handleClickShowModal}
        />
      ))}
    </section>
  );
};

export default UsersList;
