import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{
  render(){
    const beasts = data.map(animals => 
    <HornedBeast
      title = {animals.title}
      image_url = {animals.image_url}
      description = {animals.description}
      //passing the whole object so it will make it easier
      animals = {animals}
      showSelectedBeast={this.props.showSelectedBeast}
      addHeart = {this.props.addHeart}
      changes = {this.props.changes}
      />)

    return(
      <>
      <Container>
      <Row> {beasts}
      </Row>
      </Container>
      </>
    )
  }
}
export default Main;