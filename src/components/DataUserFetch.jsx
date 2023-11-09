import React from "react";
import { useState, useEffect } from "react";

function DataUserFetch() {
  const userUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setuser] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  async function getUser() {
    const response = await fetch(userUrl);
    const users = await response.json();

    if (response.status > 300) {
      setisError(true);
      setisLoading(false);
    }

    setuser(users);
    setisLoading(false);
    console.log(users);
  }

  useEffect(() => {
    getUser();
  }, []);

  console.log("Components is render");

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h1>Oppos error</h1>
      </>
    );
  }
  return (
    <>
      <h1>User information</h1>
      <ul>
        {users.map((users, id) => {
          return (
            <li key={id}>
              <h1>{users.name}</h1>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DataUserFetch;
