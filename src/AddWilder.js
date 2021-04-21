import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Button, Form, Input, Label } from "./styles/form-elements";

const CREATE_WILDER = gql`
  mutation CreateWilder($input: InputWilder!) {
    createWilder(input: $input) {
      id
      name
      city
    }
  }
`;

function AddWilder() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [createWilder, { data }] = useMutation(CREATE_WILDER);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        createWilder({
          variables: {
            input: {
              name,
              city,
            },
          },
        });
      }}
    >
      {data && <p>wilder {data.createWilder.name} a été ajouté.e</p>}
      <Label htmlFor="name-input">Name :</Label>
      <Input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Label htmlFor="city-input">City :</Label>
      <Input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;
