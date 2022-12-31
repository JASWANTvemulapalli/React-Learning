import React from "react";
import { Link, Prompt } from "react-router-dom";

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = { player: {}, flag: true };

    }
    componentDidMount() {
        if (this.props.match.params.id == 1) {
            this.setState({
                player: {
                    name: 'Dhoni',
                    runs: 10000
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Prompt when={this.state.flag} message="Are you sure you want to go back"></Prompt>
                <h1>{this.state.player.name}</h1>
                <h1>{this.state.player.runs}</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }

}
export default Player;