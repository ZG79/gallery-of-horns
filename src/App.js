import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';
import beastData from "./data.json"
import Forms from "./Forms"
import './Forms.css'

class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      emoji: '',
      selected: {},
      showModal:false,
      beastData: beastData
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

  changeTeam = (e) => {
    e.preventDefault();
    let filteredBeasts;
    const val = e.target.value;

    console.log(typeof val)
    // console.log(e.target.value, typeof(e.target.value));

    if (e.target.value === '1'){
      filteredBeasts = beastData.filter(beastie =>beastie.horns === 1)
    }else if (e.target.value === '2'){
      filteredBeasts = beastData.filter(beastie =>beastie.horns === 2)
    }else if (e.target.value === '3'){
    filteredBeasts = beastData.filter(beastie =>beastie.horns === 3)
    } else if (e.target.value === '100'){
      filteredBeasts = beastData.filter(beastie =>beastie.horns === 100)
    } else {
      filteredBeasts = beastData;
    }
  console.log(filteredBeasts)
  this.setState({beastData:filteredBeasts})

}

  render(){
    return(
      <div className='container'>
      <Header emoji={this.state.emoji}/>

      <Forms changeTeam = {this.changeTeam}/>

      <Main 
      addHeart = {this.addHeart}
      showSelectedBeast={this.showSelectedBeast}
      changes = {this.changes}
      beastData={this.state.beastData}
      />
      <SelectedBeast
        showModal = {this.state.showModal}
        hideBeastModal={this.hideBeastModal}
        selected= {this.state.selected}
      />
      <Footer />
      </div>
    )
  }
}

export default App;
