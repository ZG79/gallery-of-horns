import React from "react";
import { Form } from "react-bootstrap";

class Forms extends React.Component{
  render(){
    return(
      <Form>
        <Form.Group>
          <Form.Label>
            Beast Horns
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            <option value="4">Hundred Horns</option>
           </Form.Select>

        </Form.Group>

      </Form>
    )
  }
}

export default Forms;