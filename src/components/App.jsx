/**
 * App Component
 * ./src/components/App.jsx file
 */

import React from 'react'
import {Clock} from './Clock.jsx'
import {Toggle} from './Toggle.jsx'

/**
 * 
 * Default class for App component
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class extends React.Component {
    render() {
        return (
            <div>
                <h1>React Playground</h1>
                <h3>Clock Component</h3>
                <Clock />
                <h3>Button Toggle Component</h3>
                <Toggle />                
            </div>
        )
    }
}