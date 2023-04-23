import React from "react";
import { Button, Modal } from 'react-bootstrap';


class SelectedBeast extends React.Component{
  render(){
    return(
      <Modal show={this.props.showModal} onHide={this.props.hideBeastModal}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.selected.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selected.image_url} alt={this.props.selected.title} 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            height: 'auto', 
            width: 'auto' 
          }}  />
          {this.props.selected.description}
          </Modal.Body>
       <Modal.Footer>
        <Button variant="primary" onClick={this.props.hideBeastModal}>Close</Button>
       </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;