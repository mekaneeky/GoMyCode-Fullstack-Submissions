import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import React from 'react'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          person: {},
          shows: true
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.incrementSeconds = this.incrementSeconds.bind(this);
        this.initTimer = this.initTimer.bind(this);
      }

    toggleShow(current_show) {
        this.setState({shows: !current_show,
                        last_mount_time: 0})
    }

    incrementSeconds() {
        this.setState({
            last_mount_time: this.state.last_mount_time + 1});
    }
    
    //ideally should use inheritence 
    initTimer() {
    this.setState({last_mount_time:0 });
        
    }
    
    componentDidMount() {
        this.initTimer()          
        this.timerID = setInterval(
            () => this.incrementSeconds(),
            1000
          );
    }

    render() {
    return (
        <div className="App">
        <header className="App-header">
            <Profile time_elapsed={this.state.last_mount_time} timer={this.initTimer} shows={this.state.shows} onClick={() => {this.toggleShow(this.state.shows)}}> <img style={{height:"30%", width:"30%"}} 
            src={"./schmidhuber.jpg"}/> 
            </Profile>
        </header>
        </div>
    )};
}

export default App;
