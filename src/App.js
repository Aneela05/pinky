import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route }  from "react-router-dom"
import './App.css';
import Navbar from "./Navbar/Navbar"
import Sidebar from "./SideBar/Sidebar"
import News from "./NewsFeed/News"
import NotesAdder from './Main/NotesAdder';
import SpotifyDesign from "./Spotify/SpotifyDesign"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      module: "dairy",
    }
  }
  componentDidMount(){
    this.handleChangeModule("diary")
  }
  handleChangeModule = (module) => {
    this.setState({
        module: module
    })
  }
  render() {
    const { module } = this.state
    return (
      <div className="App">
        <Router>
        <Routes>
                <Route path="/spotify1" element={<SpotifyDesign />} />
          </Routes>
        <Navbar />
        {/* <Sidebar change={this.handleChangeModule}/> */}
        {/* <header className="App-header">
          <NotesAdder module={module} />
        </header> */}
        {/* <News /> */}
        </Router>
      </div>
    )
  }
}

export default App;
