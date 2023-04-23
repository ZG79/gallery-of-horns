import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Main.css';

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      like:0,
      dislike:0
    }
  }
  addlike = () => {
    this.setState({
      like: this.state.like + 1
    })
    this.props.addHeart();
  }

  modalHandler = () => {
    this.props.changes(this.props.animals);
    this.props.showSelectedBeast();
  }

    render(){
    return (
      <Col>
      <Card style={{ width: '18rem' }} id="cardStyle">
      <Card.Img variant="top" src={this.props.image_url}alt={this.props.alt} title={this.props.title} height={250} onClick={this.modalHandler} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
  
        <Button variant="primary" onClick={this.addlike}>Like {this.state.like}</Button>
      </Card.Body>
    </Card>
     </Col>
    )
  }
}
export default HornedBeast;
