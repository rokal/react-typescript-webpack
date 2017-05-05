import * as React from 'react'

interface CounterProps {
    score: number
}

class Counter extends React.Component<CounterProps,{}>{
    render() {
        return <div className="counter">
                    <button className="counter-action decrement" > - </button>
                    <div className="counter-score">{this.props.score} </div>
                    <button className="counter-action increment"> + </button>
                </div>
    }
}

export default Counter;