import React from 'react';

class Section extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : 0
        };
        //this.handleClick = this.handleClick.bind(this);
        //this.handleReset = this.handleReset.bind(this);
    }

    handleClick = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    handleReset = () => {
        this.setState({
            value : 0
        })
    }

    render(){
        return(
            <div className="section">
                <div>
                    <h1>{this.state.value}</h1>
                    <button onClick={this.handleClick}>Press Me</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Section;