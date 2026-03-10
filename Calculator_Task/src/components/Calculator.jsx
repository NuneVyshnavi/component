import {Component} from "react";
// import "./App.css"

class Calculator extends Component{

    state={display:""}

    OnBtn=(event)=>{
        this.setState({display:this.state.display+event.target.textContent})
    }

    OnDelBtn=()=>{
        this.setState({display:this.state.display.slice(0,this.state.display.length-1)})
    }

    OnAcBtn=()=>{
        this.setState({display:""})
    }

    OnEqualBtn=()=>{
        this.setState({display:String(eval(this.state.display))})
    }

    render(){
        return(
            <div className="calc-container">
                <div className="display">{this.state.display}</div>
                    <div className="buttons">
                    <button className="btn" onClick={this.OnAcBtn}>AC</button>
                    <button className="btn" onClick={this.OnDelBtn}>del</button>
                    <button className="btn" onClick={this.OnBtn}>%</button>
                    <button className="btn" onClick={this.OnBtn}>/</button>
                </div>
                <div>
                    <button className="btn" onClick={this.OnBtn}>1</button>
                    <button className="btn" onClick={this.OnBtn}>2</button>
                    <button className="btn" onClick={this.OnBtn}>3</button>
                    <button className="btn" onClick={this.OnBtn}>*</button>
                </div>
                <div>
                    <button className="btn" onClick={this.OnBtn}>4</button>
                    <button className="btn" onClick={this.OnBtn}>5</button>
                    <button className="btn" onClick={this.OnBtn}>6</button>
                    <button className="btn" onClick={this.OnBtn}>-</button>
                </div>
                <div>
                    <button className="btn" onClick={this.OnBtn}>7</button>
                    <button className="btn" onClick={this.OnBtn}>8</button>
                    <button className="btn" onClick={this.OnBtn}>9</button>
                    <button className="btn" onClick={this.OnBtn}>+</button>
                </div>
                <div>
                    <button className="btn" onClick={this.OnBtn}>00</button>
                    <button className="btn" onClick={this.OnBtn}>0</button>
                    <button className="btn" onClick={this.OnBtn}>.</button>
                    <button className="btn" onClick={this.OnEqualBtn}>=</button>
                </div>
            </div>
       
        )
    }
}
export default Calculator