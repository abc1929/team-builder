import React, { useState } from "react";
import Team from "./Components/team";
import Form from "./Components/form";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
   const [team, setTeam] = useState([]);

   return (
      <ChakraProvider>
         <div className="App">
            <h1 style={{ fontSize: "2.4rem" }}> Team Application </h1>
            <div className="main">
               <Form team={team} setTeam={setTeam}></Form>
               <Team team={team}></Team>
            </div>
         </div>
      </ChakraProvider>
   );
}

export default App;
