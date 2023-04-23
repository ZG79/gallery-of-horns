import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';


class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      emoji: '',
      selected: {},
      showModal:false,
    }
  }

  changes = (selectedObj) => {
    this.setState({selected:selectedObj})
  }

  addHeart = () => {
    this.setState({
      emoji: this.state.emoji ? '':'😈'
    })
  }

  showSelectedBeast = () => {
    this.setState({showModal:true})
  }

  hideBeastModal = () => {
    this.setState({showModal:false})
  }

  render(){
    return(
      <>
      <Header emoji={this.state.emoji}/>
      <Main 
      addHeart = {this.addHeart}
      showSelectedBeast={this.showSelectedBeast}
      changes = {this.changes}
      
      />
      <SelectedBeast
        showModal = {this.state.showModal}
        hideBeastModal={this.hideBeastModal}
        selected= {this.state.selected}
      />
      <Footer />
      </>
    )
  }
}

export default App;
