import React from "react";
import { Button, Form, Input, Label } from "./styles/form-elements";

function AddWilder() {
  return (
    <Form>
      <Label htmlFor="name-input">Name :</Label>
      <Input id="name-input" type="text" placeholder="Type the name" />
      <Label htmlFor="city-input">City :</Label>
      <Input id="city-input" type="text" placeholder="Type the city" />
      <Button>Add</Button>
    </Form>
  );
}

export default AddWilder;
