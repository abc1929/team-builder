import React, { useState } from "react";
import Member from "./member";
// import { Divider } from "@chakra-ui/react";

export default function Team(props) {
   // const [t, setT] = useState(aa);

   // const [team, setTeam] = useState([]);

   return (
      <div className="team">
         {/* {console.log(props.team)} */}
         {props.team.map((i) => {
            return (
               <div key={i.email}>
                  <Member
                     key={i.email}
                     member={i}
                     setMemberToEdit={props.setMemberToEdit}
                  ></Member>
                  {/* <Divider /> */}
               </div>
            );
         })}
      </div>
   );
}
