import React from "react";

const scaleNames = {
    c : "Celsius",
    f : "Fahrenheit"
}

function BollingVerdict(props){
    if(props.celsius >= 100){
        return <p>boiling</p>
    }else{
        return <p>not boiling</p>
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
            temp : "",
            scale : "c" // default = c
        }
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this) 
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    }

    handleCelsiusChange(temp){
        this.setState({scale:"c", temp:temp})
    }

    handleFahrenheitChange(temp){
        this.setState({scale:"f", temp:temp})
    }

    render(){
        // const temp = this.state.temp
        const temp = this.state.temp
        const scale = this.state.scale
        const celsius = scale === "f" ? tryConvert(temp,toCelsius) : temp
        const fahrenheit = scale === "c" ? tryConvert(temp,toFahrenheit):temp

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
                    temp={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                
                <TemperatureInput
                    scale="f" 
                    temp={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BollingVerdict celsius = {parseFloat(celsius)} />

            </div>
        )
    }

}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     temp:""
        // }
        // this.handleChange = this.handleChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        // this.setState({temp:e.target.value})
        this.props.onTemperatureChange(e.target.value)
    }

    // render(){
    //     const temperature = this.props.temp
    //     const scale = this.props.scale
    //     return(
    //         <fieldset>
    //             <legend>input your temp {scaleNames[scale]}</legend>
    //             <input value={temperature}
    //                 onChange={this.handleChange}/>
    //         </fieldset>
    //     )
    // }

    render() {
        const temperature = this.props.temp;
        const scale = this.props.scale;
        return (
          <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                   onChange={this.handleChange} />
          </fieldset>
        );
      }

}

function toCelsius(fahrenheit){
    const r = (fahrenheit -32) * 5 / 9
    console.log(r)
    return 
}

function toFahrenheit(celsius){
    const r = (celsius * 9 / 5) +32
    console.log(r)
    return r
}

function tryConvert(temp, convert){
    const input = parseFloat(temp)
    if (Number.isNaN(input)){
        return ""
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000)/1000
    return rounded.toString
}

export {Calculator}

