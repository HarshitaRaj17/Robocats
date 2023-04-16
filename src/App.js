import React,{Component} from 'react';
import './App.css';


import CardList from './CardList';
import SearchBox from './SearchBox';
class App extends Component{
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }

  onSearchChange=(event)=>{
  this.setState({searchfield: event.target.value})
}

  componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(users=>{
      this.setState({robots:users})
    });
    }
  render(){
    const filteredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (this.state. robots.length===0)?
    <h1>LOADING...</h1>:



      <div className="tc">
      <h1> RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots}/>
      </div>


  }
}
export default App;
