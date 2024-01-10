import { useState,useRef } from "react";
export default function CounterFunction({userName,title,agree}){// we receive (propos)
    // const{title,agree}= propos;// here we are rendering a boolean

    const [counter,setCounter]=useState();
    const[lastAction, setLastAction]= useState('none');

    const inputIncrease=useRef();
    const inputDecrease=useRef();

    const handleIncrementClick=()=>{
            setCounter(counter+1);
            setLastAction('Increased');
            inputIncrease.current.focus();
      
    }

    const handleDecrementClick=()=>{
       setCounter(counter-1);
       setLastAction('Decreased');
       inputDecrease.current.focus();
    }
{/* <div>
    func:{title}
    agree:{agree?'yes' :'no'}
</div> */}


return(
    
    <div>
        Counter for {userName}: {counter}
        <div>Last Action:{lastAction}</div>
        <div>
        <input
         type='text' 
         placeholder='Focus on increase' 
         ref={inputIncrease}/>
        </div>
        <button onClick={handleDecrementClick}>Decrease</button>
        <button onClick={handleIncrementClick}>Increase</button>
    </div>

    


    );
}
