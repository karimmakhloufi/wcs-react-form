import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./styles/elements";
import Wilder, { IWilder } from "./Wilder";
import AddWilder from "./AddWilder";

function App(): JSX.Element {
  const [wilders, setWilders] = useState<IWilder[]>([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilders");
        setWilders(result.data.result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <AddWilder />
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map((wilder) => (
            <Wilder
              // eslint-disable-next-line no-underscore-dangle
              key={wilder._id}
              city={wilder.city}
              name={wilder.city}
              skills={wilder.skills}
            />
          ))}
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
