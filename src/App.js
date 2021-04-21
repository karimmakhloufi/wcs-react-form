import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./App.css";
import { CardRow, Container, Footer, Header } from "./styles/elements";
import Wilder from "./Wilder";
import AddWilder from "./AddWilder";

const ALL_WILDERS = gql`
  query GetAllWilders {
    allWilders {
      id
      name
      city
      skills {
        id
        title
        votes
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_WILDERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
          {data.allWilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
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
