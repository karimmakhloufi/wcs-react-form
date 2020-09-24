import React from "react";
import styled from "styled-components";
import "./App.css";
import Wilder from "./Wilder";

const Container = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
`;

const CardRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  justify-content: space-between;
`;

function App() {
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </header>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          <Wilder />
          <Wilder />
          <Wilder />
          <Wilder />
        </CardRow>
      </Container>
      <footer>
        <Container>
          <p>&copy; 2020 Wild Code School</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
