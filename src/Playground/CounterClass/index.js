import React, {createRef} from'react';
import counterPrimeNumbers from './../prime';

export default class CounterClass extends React.Component{
    constructor(){
        super();

        // const handleCountPress=()=>{
            this.setState({
                isCalculating: true
            });
            
            setTimeout(()=>{
                const maxNumber = 20;
        const primeNumbers= counterPrimeNumbers(maxNumber);
        this.setState({
            isCalculating: false,
            maxNumber: maxNumber,
            primeNumbers: primeNumbers
        });
            },10);
        // }
        this.state={
            counter: 3,
            lastAction:'none',
            maxNumber: null,
            primeNumbers: null,
            isCalculating:false
        }
        this.inputIncrease = createRef();
        this.inputIDecrease = createRef();
    }
    render(){
    const handleIncrementClick=()=>{
        this.setState({
            counter: this.state.counter + 1,
            lastAction: 'Increased'
        });
        this.inputIncrease.current.focus();
    }

    const handleDecrementClick=()=>{
        this.setState({
            counter: this.state.counter - 1,
            lastAction: 'Decreased'
        });
        this.inputIncrease.current.focus();
    }

    
    
    
    console.log(' Class component rendered');
    return(
        <div>
              
            {this.state.isCalculating &&(
            <div><strong>Calculating prime number.Please,wait...</strong></div>
            )}

           <div><strong>Calculating prime number.Please,wait...</strong></div>
            {this.syate.primeNumbers !==null && (
                <div>
                there are {this.state.primeNumbers} prime numbers
                betwen 2 and {this.state.maxNumber}.
                </div>
            )}

            
            <div>Counter for {this.props.userName}: {this.state.counter}</div>
            <div>Last Action:{this.state.lastAction}</div>
            <div>
            <input
             type='text' 
             placeholder='Focus on increase' 
             ref={this.inputIncrease}/>
            </div>
            <button onClick={handleDecrementClick}>Decrease</button>
            <button onClick={handleIncrementClick}>Increase</button>
        </div>
    )

}
}