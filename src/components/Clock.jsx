import React from 'react'
/**
 * 
 * 
 * @export
 * @class Clock
 * @extends {React.Component}
 */
export class Clock extends React.Component {
    /**
     * Creates an instance of Clock.
     * @param {any} props 
     * @memberof Clock
     */
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    /**
     * 
     * 
     * @memberof Clock
     */
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }
    /**
     * 
     * 
     * @memberof Clock
     */
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    /**
     * 
     * 
     * @memberof Clock
     */
    tick() {
        this.setState({
            date: new Date()
        })
    }
    /**
     * 
     * 
     * @returns 
     * @memberof Clock
     */
    render() {
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}