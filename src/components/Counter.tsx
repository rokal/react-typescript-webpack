import * as React from 'react'

interface CounterProps {
    score: number
    onChange(delta:number):void;
}

class Counter extends React.Component<CounterProps,{}>{
    render() {
        return <div className="counter">
                    <button className="counter-action decrement" onClick={()=> this.props.onChange(-1)}> - </button>
                    <div className="counter-score">{this.props.score} </div>
                    <button className="counter-action increment" onClick ={()=>this.props.onChange(1)}> + </button>
                </div>
    }
}

export default Counter;