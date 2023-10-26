import React from "react";

const scaleNames = {
    c : 'Celsius',
    f : 'Fahrenheit'
}

function toCelsius(fahrenheit){
    const r = (fahrenheit -32) * 5 / 9 ;
    console.log(r)
    // return (fahrenheit - 32) * 5 / 9;
    return r
}

function toFahrenheit(celsius){
    const r = (celsius * 9 / 5) +32
    console.log(r)
    return r
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature)
    if (Number.isNaN(input)){
        return '';
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

function BollingVerdict(props){
    if(props.celsius >= 100){
        return <p>boiling</p>
    }else{
        return <p>not boiling</p>
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={ temperature }
                 onChange={ this.handleChange } />
        </fieldset>
      );
    }
  }

class Calculator extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state ={
    //         temp : ""
    //     }
    //     this.handleChange = this.handleChange.bind(this)      
    // }

    // handleChange(e){
    //     this.setState(
    //         {temp:e.target.value}
    //     )
    // }
    constructor(props){
        super(props)
        this.state = {
            temperature : '',
            scale : '' // default = c
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this) 
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temperature){
        this.setState({scale:'c', temperature:temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale:'f', temperature:temperature})
    }

    render(){
        // const temp = this.state.temp
        const temperature = this.state.temperature
        const scale = this.state.scale
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit):temperature

        // console.log("calculator: ", temperature)
        // console.log("celsius: ", celsius)
        // console.log("fahrenheit: ", fahrenheit)
        return(
            // <fieldset>
            //     <legend>Enter celsius temp</legend>
            //     <input 
            //         value={temp}
            //         onChange={this.handleChange}
            //     />
            //     <BollingVerdict celsius={parseFloat(temp)}/>
                    
            // </fieldset>
            <div>
                
                <TemperatureInput 
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>
                
                <TemperatureInput
                    scale="f" 
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>

                <BollingVerdict celsius = {parseFloat(celsius)} />

            </div>
        )
    }

}


export {Calculator}

