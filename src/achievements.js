import React from "react";
import ProgressBar from "./progress-bar";
import './achievements.css';


const testData = [
    { bgcolor: "#43ff36", completed: 0 }
  ];

  function ShowAchievements() {
    return (
      <div class="bg_image" >
  
        <h1>Achievements</h1>
        <h2>Points: {global.points}</h2>
        {/* amount should be gathered from other interfaces and replaced with actual value */}
        <Achievement name="Use the study timer 5 times" amount="1" needed="5" points="250"/> 
        <Achievement name="Meditate for 10 hours" amount="6" needed="10" points="100"/>
        <Achievement name="Complete the survey" amount="0" needed="1" points="300"/>
      </div>
    );
  }

export class Achievement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            amount: parseInt(this.props.amount),
            total: parseInt(this.props.needed),
            completed: false,
            points: parseInt(this.props.points),
            collected: false,
            percent: Math.floor(100*this.props.amount/this.props.needed)

        };
    };



    updateProgress = () => {
        if (this.state.amount >= this.state.total) {
            this.setState({
                completed: true
            });
        };

        this.setState({
            amount: Math.min(this.state.amount+1,this.state.total),
            percent: Math.floor(100*this.state.amount/this.state.total),
            /*counter: Math.min(this.state.counter+(Math.floor(100/this.state.total)),100)*/
        });  
    }

    collectPoints = () => {
        this.setState({
            collected: true
        });
        global.points += this.state.points;
    }


    render() {
        let b;
        if (this.state.completed && !this.state.collected) {
            b = <button onClick={this.collectPoints}>Collect {this.state.points} points</button>;
        }
        //<h2>Points: {global.points}</h2>
        return (
            <div className="Achievement">
                <h2>{this.props.name}</h2>

                <p>Amount: {this.state.percent}%</p>
                <p>{this.state.completed ? 'Completed!' : 'To do'}</p>
                {testData.map((item, idx) => (
                    <ProgressBar key={idx} bgcolor={item.bgcolor} 
                    completed={this.state.percent} />
                ))}
                <button onClick={this.updateProgress}>Update</button>
                {b}
            </div>
            
        );
    }
}

export default ShowAchievements;