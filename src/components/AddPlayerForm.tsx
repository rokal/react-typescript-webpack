import * as React from "react";

interface PlayerFormProps {
    onPlayerAdd(playerName:string):void
}
interface PlayerFormState {
    playerName: string;
}
class AddPlayerForm extends React.Component<PlayerFormProps, PlayerFormState>{
    constructor(props: PlayerFormProps) {
        super(props);
        this.state = {
            playerName: ""
        }
    }
    onSubmit = (event: any) => {
        event.preventDefault();
        this.props.onPlayerAdd(this.state.playerName);
        this.setState({
            playerName:""
        });
    }

    onChange = (event: any): void => {
        this.setState({
            playerName: event.currentTarget.value
        });
    }
    render() {
        return (
            <div className="add-player-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange} value={this.state.playerName} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        );
    }
}
export default AddPlayerForm;