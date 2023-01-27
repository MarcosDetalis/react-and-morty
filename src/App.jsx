import React, { useEffect, useState } from "react";

function App() {
  const [personas,setpersonaje] = useState([]);
  useEffect(() => {
    async function apidata() {
      const resp = await fetch("https://rickandmortyapi.com/api/character");
      const data = await resp.json();
   
      setpersonaje(data.results)
    }
    apidata();
  }, []);

  return (
    <div>
      {
        personas.map(persona => {
          return (
            <div> {persona.name} </div>
          )
        })
       }
    </div>
  );
}

export default App;
