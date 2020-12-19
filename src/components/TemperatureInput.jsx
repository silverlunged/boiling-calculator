import React from 'react';
const scaleNames = {c: 'Celsius', f: 'Fahrenheit'}
class TemperatureInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return <div>
        <p>Введите градусы по шкале {scaleNames[scale]}:</p>
            <input value={temperature} onChange={this.handleChange}></input>
        </div>
    }
 }
 export default TemperatureInput