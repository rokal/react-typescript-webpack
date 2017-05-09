import * as React from "react";
interface StopwatchProps {
    running: boolean;
}

interface StopwatchState {
    elapsedTime?: number;
    previousTime?: number;
    running: boolean;
}
class Stopwatch extends React.Component<StopwatchProps, StopwatchState>{
    constructor(props: StopwatchProps) {
        super(props);
        this.state = {
            elapsedTime: 0,
            previousTime: 0,
            running: false
        };
    }
    interval: any;
    tick = ()=> {
        if (this.state.running) {
            let now = Date.now();
            this.setState({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
                running: true
            });
        }
    }
    componentWillUnmount = ()=> {
        clearInterval(this.interval);
    }
    componentDidMount= ()=>  {
        this.interval = setInterval(this.tick, 100)
    }
    onStop= ()=> {
        this.setState({
            running: false,
        });
    }
    onStart= ()=>  {
        this.setState({
            previousTime:Date.now(),
            running: true
        });
    }
    onReset= ()=> {
        this.setState({
            previousTime: 0,
            elapsedTime:0,
            running: false
        });
    }
    render() {
        let timeInSecondes = Math.floor(this.state.elapsedTime/1000);
        return (
            <div className="stopwatch">
                <h2>Stop watch</h2>
                <div className="stopwatch-time">{timeInSecondes}</div>
                {this.state.running ? <button onClick={this.onStop}>Stop</button> : <button onClick={this.onStart}>Start</button>}
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }

}

export default Stopwatch;