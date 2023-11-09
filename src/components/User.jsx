import React from "react";
import { useState, useEffect } from "react";

function User() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setuser] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);

  async function getUser() {
    const response = await fetch(url);
    const users = await response.json();

    if (response.status > 300) {
      setisError(true);
      setIsLoading(false);
    }

    setuser(users);
    setIsLoading(false);
    console.log(users);
  }

  useEffect(() => {
    getUser();
  }, []);
  console.log("Component is render");
  if (IsLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  if (isError)
    return (
      <>
        <h1>Oppos error</h1>
      </>
    );
  return (
    <>
      <h1>User information</h1>
      <ul>
        {users.map((users, id) => {
          return (
            <li key={id}>
              <h1>{users.name}</h1>
              <span>{users.username}</span>
              <p>{users.email}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default User;
