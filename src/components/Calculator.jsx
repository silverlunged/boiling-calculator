import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'
import React from 'react';



class Calculator extends React.Component {
constructor(props) {
    super(props);
    this.state={temperature: '', scale: 'c'}; 
    this.onCelsiusChange = this.onCelsiusChange.bind(this);
    this.onFahrenheitChange = this.onFahrenheitChange.bind(this);
}
onCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
}
onFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
}
render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const fahrenheit = scale === 'c'? tryConvert(temperature, toFahrenheit):temperature;
    const celsius = scale === 'f'? tryConvert(temperature, toCelsius):temperature;

    

    return <div>
        <TemperatureInput scale='c' temperature={celsius} onChange={this.onCelsiusChange}/>
        <TemperatureInput scale='f' temperature={fahrenheit} onChange={this.onFahrenheitChange}/>
        <BoilingVerdict celsius={celsius}/>
    </div>
}

}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert (temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
  }

export default Calculator;

