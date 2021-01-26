import React, { useState, useEffect } from "react";
import Team from "./Components/team";
import Form from "./Components/form";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

function App() {
   const [team, setTeam] = useState([]);
   const [memberToEdit, setMemberToEdit] = useState(null);

   useEffect(() => {}, [memberToEdit]);

   return (
      <ChakraProvider>
         <div className="App">
            <h1 style={{ fontSize: "2.4rem" }}> Team Application </h1>
            <div className="main">
               <Form
                  team={team}
                  setTeam={setTeam}
                  memberToEdit={memberToEdit}
                  setMemberToEdit={setMemberToEdit}
               ></Form>
               <Team team={team} setMemberToEdit={setMemberToEdit}></Team>
            </div>
         </div>
      </ChakraProvider>
   );
}

export default App;
