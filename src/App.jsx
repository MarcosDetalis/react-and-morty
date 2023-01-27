import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    async function apidata() {
      const resp = await fetch("https://rickandmortyapi.com/api/character");
      const data = await resp.json();
      console.log("", data);
    }
    apidata();
  }, []);

  return <h1>sfsf</h1>;
}

export default App;
