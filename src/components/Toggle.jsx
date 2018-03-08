import React from 'react'
/**
 * 
 * 
 * @export
 * @class Toggle
 * @extends {React.Component}
 */
export class Toggle extends React.Component {
    /**
     * Creates an instance of Toggle.
     * @param {any} props 
     * @memberof Toggle
     */
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }
        this.handleClick = this.handleClick.bind(this)
    }
    /**
     * 
     * 
     * @memberof Toggle
     */
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    /**
     * 
     * 
     * @returns {JSXElement} JSX React element  
     * @memberof Toggle
     */
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}