import React from 'react';

export default class Json extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            players: []
        };

    }
    //Server Json Data
    sendData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { "Content-Type": "application/json ; charset=UTF-8 " },
            body: JSON.stringify({

                Name: 'Sampath',
                Matches: 2,
                Runs: 50,
                Wickets: 0
            })

        };

        //For Add Operation
        fetch("http://localhost:3211/players", requestOptions).then(res => {
            console.log({ res });
            return res.json()
        })
            .then(data => {
                console.log(typeof data)
            });


    }

    //Editing 
    editData = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { "Content-Type": "application/json ; charset=UTF-8 " },
            body: JSON.stringify({

                Name: 'Sa',
                Matches: 2,
                Runs: 50,
                Wickets: 0
            })

        };

        //For Add Operation
        fetch("http://localhost:3211/players/5", requestOptions).then(res => {
            console.log({ res });
            return res.json()
        })
            .then(data => {
                console.log(typeof data)
            });


    }


    componentDidMount() {
        //For Fetching the Json Server Data
        fetch("http://localhost:3211/players").then(
            response => response.json()).then(
                //Handle the result
                (httpresponse) => {
                    this.setState({
                        isLoaded: true,
                        players: httpresponse
                    });
                }
            )


    }


    render() {
        return (
            <div>
                <table border="1px solid #ff00ff" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Matches</th>
                            <th>Runs</th>
                            <th>Wickets</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.players.map(
                            myplayer => (
                                <tr key={myplayer.id}>
                                    <td>{myplayer.id}</td>
                                    <td>{myplayer.Name}</td>
                                    <td>{myplayer.Matches}</td>
                                    <td>{myplayer.Runs}</td>
                                    <td>{myplayer.Wickets}</td>
                                    <td><button onClick={this.editData}>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <button onClick={this.sendData}>Add</button>
            </div>
        )
    }
}