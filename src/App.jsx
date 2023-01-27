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
            <ul key={persona.image}  >
              <li>
                <p>{persona.name}</p>
              </li>
              <li>
                <img src={persona.image} alt={persona.name} />
              </li>
            </ul>
          );
        })
       }
    </div>
  );



}

export default App;
