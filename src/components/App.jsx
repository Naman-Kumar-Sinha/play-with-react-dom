/**
 * App Component
 * ./src/components/App.jsx file
 */

import React from 'react'
import {Clock} from './Clock.jsx'

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
                <Clock />
            </div>
        )
    }
}