import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Otavio",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
