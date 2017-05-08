import * as React from "react";

interface StopwatchState{
    elapsedTime:number;
    previousTime:number;
}
class Stopwatch extends React.Component<{},StopwatchState>{
    componentWillMount(){
        console.log("component will mount");
    }
    componentDidMount(){
        console.log("stopwatch has been mounted")
    }
    render(){
        return(
            <div className="stopwatch">
                <h2>Stop watch</h2>
                <div className="stopwatch-time">0</div>
                <button>Start</button>
                <button>Reset</button>
            </div>
        );
    }

}

export default Stopwatch;