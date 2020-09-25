import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./styles/elements";
import Wilder from "./Wilder";

function App() {
  const [data, setData] = useState({ wilders: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilder/read");
        console.log(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
