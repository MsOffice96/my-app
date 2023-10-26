import React from "react";

function FancyBoreder(props){
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>
            {props.children}
        </div>
    )
}

function WelcomDialog(){
    return(
        <FancyBoreder color="blue">
            <h1 className="dialog-title">
                dialog-title
            </h1>
            <p className="dialog-message">
                dialog-message
            </p>
        </FancyBoreder>
    )
    
}

function Dialog(props){
    return(
        <FancyBoreder color="red">
            <h1 className="dialog-title">
                {props.title}
            </h1>
            <p className="dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBoreder>
    )
}

class SignUpDialog extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.state={login:""}
    }

    render(){
        return(
            <Dialog title="title example" message="message example">
                <input value={this.state.login} onChange={this.handleChange}>

                </input>
                <button onClick={this.handleSignUp}>
                    sign
                </button>
            </Dialog>
        )
    }

    handleChange(e){
        this.setState({login:e.target.value})
    }

    handleSignUp(){
        alert(`sign member, ${this.state.login}`)
    }
}

export {WelcomDialog, SignUpDialog}