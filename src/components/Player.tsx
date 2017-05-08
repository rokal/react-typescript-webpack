import * as React from 'react'
import Counter from './Counter';

export interface PlayerProps {
    score: number;
    name: string;
    onScoreChange?:(delta:number)=>void;
}

class Player extends React.Component<PlayerProps, {}>{
    render() {
        return (
            <div className="player">
                <div className="player-name">
                    {this.props.name}
                </div>
                <div className="player-score">
                    <Counter 
                        score={this.props.score} 
                        onChange={(delta)=>this.props.onScoreChange(delta)} />
                </div>
            </div>
        );
    }
}
export default Player;