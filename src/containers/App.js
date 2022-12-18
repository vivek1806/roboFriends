import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary"

import SearchBox from "../components/SearchBox";
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchFiled:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
            return response.json()
        })
        .then(users =>{
            this.setState({robots:users})
        })
        
    }

    onSearchChange = (event) => {

        this.setState({searchFiled:event.target.value})
        
    }

    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())
        })
        return(
            <div className="tc">
            <h1 className="f1">Robo Friends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filterRobots}/>
            </ErrorBoundary>
            </Scroll>
           
            </div>
        )
    }
   
}

export default App