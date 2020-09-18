import React from "react";
import NavBar from "./NavBar";
import BottleControl from "./BottleControl";
import Container from "react-bootstrap/Container";

function App(){
  return (
    <React.Fragment>
      <NavBar />
      <Container style={{backgroundColor: 'rgba(245, 245, 245, 0.5)', marginTop: '150px'}}>
        <BottleControl />
      </Container>
    </React.Fragment>
  );
}

export default App;