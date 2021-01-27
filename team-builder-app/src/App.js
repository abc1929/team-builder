import React, { useState, useEffect } from "react";
import Team from "./Components/team";
import Form from "./Components/form";
import { IconButton, ChakraProvider } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "./App.css";

function App() {
   const [currentteam, setCurrentteam] = useState([]);
   const [currenttab, setCurrenttab] = useState(1);
   const [teams, setTeams] = useState([[1, []]]);
   const [memberToEdit, setMemberToEdit] = useState(null);

   //  useEffect(() => {
   //     const newteams = [...teams];
   //     newteams[currenttab - 1] = [currenttab, currentteam];
   //     setTeams(newteams);
   //  }, [currentteam]);

   const updateall = () => {
      const newteams = [...teams];
      newteams[currenttab - 1] = [currenttab, currentteam];
      setTeams(newteams);
   };

   return (
      <ChakraProvider>
         <Tabs>
            <TabList>
               {teams.map((i) => (
                  <Tab
                     key={"tab" + i[0]}
                     onClick={() => {
                        updateall();
                        setCurrentteam(teams[i[0] - 1][1]);
                        setCurrenttab(i[0]);
                     }}
                  >
                     {i[0]}
                  </Tab>
               ))}
               <IconButton
                  icon={<AddIcon />}
                  margin="1% 2%"
                  size="sm"
                  onClick={(e) => {
                     const newteam = [teams[teams.length - 1][0] + 1, []];
                     setTeams(teams.concat([newteam]));
                  }}
               ></IconButton>
            </TabList>
            <TabPanels>
               {teams.map((i) => {
                  return (
                     <TabPanel key={"tabpanel" + i[0]}>
                        <div className="App">
                           <h1 style={{ fontSize: "2.4rem" }}>
                              {" "}
                              Team Application{" "}
                           </h1>
                           <div className="main">
                              <Form
                                 team={currentteam}
                                 setTeam={setCurrentteam}
                                 memberToEdit={memberToEdit}
                                 setMemberToEdit={setMemberToEdit}
                              ></Form>
                              <Team
                                 team={currentteam}
                                 setMemberToEdit={setMemberToEdit}
                              ></Team>
                           </div>
                        </div>
                     </TabPanel>
                  );
               })}
            </TabPanels>
         </Tabs>
      </ChakraProvider>
   );
}

export default App;
