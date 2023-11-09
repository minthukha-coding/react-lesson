import React from "react";
import { useState, useEffect } from "react";

function TestFAKEAPI() {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setpost] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);

  async function getPost() {
    const response = await fetch(postUrl);
    const posts = await response.json();

    if (response.status > 300) {
      setisError(true);
      setisLoading(false);
    }

    setpost(posts);
    setisLoading(false);
    console.log(posts);
  }
  useEffect(() => {
    getPost()
  }, []);

  if (isLoading){
    return<>
    <h1>Loading...</h1></>
  }
  if (isError){
    return<>
    <h1>Oppos err...</h1></>
  }
  return (
    <>
      <h1>Fake API Fetch</h1>
      {posts.map((posts, id) => {
        return (
          <li key={id}>
            <p>{posts.title}</p>
          </li>
        );
      })}
    </>
  );
}

export default TestFAKEAPI;
