import React, { useState } from "react";

import { Input, Select, Button, Stack } from "@chakra-ui/react";

const initial = {
   name: "",
   email: "",
   role: "",
};

export default function Form(props) {
   const [formcontent, setFormcontent] = useState(initial);
   const setTeam = props.setTeam;
   const team = props.team;

   const update = (e) => {
      const { name, value } = e.target;
      // console.log(e.target, name, value);
      setFormcontent({ ...formcontent, [name]: value });
   };

   const submit = (e) => {
      for (let i of Object.keys(formcontent)) {
         if (formcontent[i] === "") {
            return;
         }
      }
      if (team.find((i) => i.email === formcontent.email)) {
         alert("This email is used");
         return;
      }

      setTeam(team.concat(formcontent));
   };

   return (
      <div>
         <form action="">
            <Stack spacing={3} className="formstack">
               <Input
                  placeholder="Name"
                  name="name"
                  onChange={(e) => update(e)}
               />
               <Input
                  placeholder="Email"
                  name="email"
                  onChange={(e) => update(e)}
               />
               <Select
                  name="role"
                  id=""
                  placeholder="Select option"
                  onChange={(e) => update(e)}
               >
                  <option value="Backend">Backend</option>
                  <option value="UIUX">UI/UX</option>
                  <option value="Frontend">Frontend</option>
                  <option value="DevOp">DevOp</option>
               </Select>
               <Button w="50%" onClick={(e) => submit(e)}>
                  {" "}
                  Submit{" "}
               </Button>
            </Stack>
         </form>
      </div>
   );
}
