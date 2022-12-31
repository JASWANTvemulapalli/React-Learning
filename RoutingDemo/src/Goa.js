import React from 'react';
import one from './Images/1.JPG'
import two from './Images/2.JPG'
import three from './Images/3.JPG'
import four from './Images/4.JPG'
import five from './Images/5.JPG'
import six from './Images/6.JPG'
import seven from './Images/7.JPG'

class MyName extends React.Component {
    constructor() {
        super();
        this.state = { Names: [one, two, three, four, five, six, seven], index: 0 }
        this.Next = this.Next.bind(this);
        this.Back = this.Back.bind(this);
    }

    Next() {
        if (this.state.index < this.state.Names.length - 1) {
            this.setState({ index: this.state.index + 1 });
        }
        else {
            this.setState({ index: 0 });
        }

    }
    Back() {
        if (this.state.index <= 0) {
            this.setState({ index: 0 });
        }
        else {
            this.setState({ index: this.state.index - 1 });
        }
    }

    render() {
        return (<div className='di'>
            <h2 id='one'>Goa Memories</h2>
            <button className="btn btn-primary" onClick={this.Back}>Previous</button>
            <img className='img' src={this.state.Names[this.state.index]} />
            <button className="btn btn-primary" onClick={this.Next}>Next</button>
        </div >)
    }



}
export default MyName;