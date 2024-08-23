import React from "react";

class CustomClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hour:0, minute:0, second:0 };
    }
    
    componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
    }
    
    componentWillUnmount() {
    clearInterval(this.timerID);
    }

    tick() {
        const dateObject = new Date()
      
        const h = dateObject.getHours()
        const m = dateObject.getMinutes()
        const s = dateObject.getSeconds()

        this.setState({
            hour:h, minute:m, second:s 
        });
    }

    render() {
        return (
            <div>{this.state.hour}:{this.state.minute}:{this.state.second}</div>
        );

    }
}

export default CustomClock;