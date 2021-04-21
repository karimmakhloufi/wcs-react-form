import React, { useState } from "react";
import { Button, Form, Input, Label } from "./styles/form-elements";

function AddWilder() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
      }}
    >
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
