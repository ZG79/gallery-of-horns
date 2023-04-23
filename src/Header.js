import React from "react";
import './Main.css';

class Header extends React.Component{
  render(){
    return(
      <>
      <h1 id="tag">Horned Beats Encyclopedia {this.props.emoji} </h1>
      </>
    )
  }
}
export default Header;