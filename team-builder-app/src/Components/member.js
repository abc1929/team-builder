import React from "react";
import { Container, Button } from "@chakra-ui/react";

export default function Member(props) {
   const data = props.member;
   return (
      <Container
         maxW="s"
         border={"0px solid black"}
         // boxShadow={"0.3rem 0.2rem 0.3rem #524e4e;"}
         boxShadow={"0.1rem 0.1rem 0.3rem #524e4e;"}
         borderRadius={"12px"}
         margin={"2%"}
         padding={"3% 3% 3% 7%"}
         // paddingLeft={"1%"}
         bgColor={"#fafbfd"}
         lineHeight={"2rem"}
         textAlign={"left"}
      >
         <div className="inner">
            <div>
               <p>Name: {data.name}</p>
               <p>Email: {data.email}</p>
               <p>Role: {data.role}</p>
            </div>
            <Button
               alignSelf="flex-end"
               onClick={() => props.setMemberToEdit(data.email)}
            >
               {" "}
               Edit{" "}
            </Button>
         </div>
      </Container>
   );
}

// border-radius: 16px;
// background-color: ${theme.cardcolor};
// box-shadow:
