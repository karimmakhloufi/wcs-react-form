import React from "react";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./styles/elements";
import Wilder from "./Wilder";

function App() {
  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          <Wilder />
          <Wilder />
          <Wilder />
          <Wilder />
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
