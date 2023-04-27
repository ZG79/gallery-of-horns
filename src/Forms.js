import React from "react";
import { Form } from "react-bootstrap";

// import beastData from "./data.json";

class Forms extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state ={
  //     beastData: beastData
  //   }
  // }

//   changeTeam = (e) => {
//     e.preventDefault();
//     let filteredBeasts;
//     const val = e.target.value;

//     console.log(typeof val)
//     // console.log(e.target.value, typeof(e.target.value));

//     if (e.target.value === '1'){
//       filteredBeasts = beastData.filter(beastie =>beastie.team === 1)
//     }else if (e.target.value === '2'){
//       filteredBeasts = beastData.filter(beastie =>beastie.team === 2)

//   }
//   this.setState({beastData:filteredBeasts})

// }

  render(){
    return(
      <Form>
        <Form.Group>
          <Form.Label>
            Beast Horns
          </Form.Label>
          <Form.Select onChange={this.props.changeTeam}>
            <option value="">Beasts by their horns</option>
            <option value="1">One Horn</option>
            <option value="2">Two Horns</option>
            <option value="3">Three Horns</option>
            <option value="100">Hundred Horns</option>
           </Form.Select>

        </Form.Group>

      </Form>
    )
  }
}

export default Forms;