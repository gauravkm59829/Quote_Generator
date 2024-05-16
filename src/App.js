import { useState, useEffect } from "react";
import Message from './Message';
import './App.css';
function App(){

    const [quote, setQuote] = useState("");
    const [count, setCount] = useState(-1);

    async function getQuote(){
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        // console.log(data);
        setQuote(data.slip.advice);
        setCount((c) => c + 1);
    }

    
    useEffect(() => {
        getQuote();
    }, []);
    return (
     <div className="App">
         {/* <h1>Welcome to Quotebud</h1> */}
         <div className="card">
          <h1>{quote}</h1>
          <button onClick={getQuote} className="btn btn-dark">Get Quote</button>
          <Message cnt = {count} />
         </div>
         <div className="code">
          <p className="by">Made with <span id = "key">⌨</span> by Gaurav.</p>
         </div>
     </div>
    )
}

export default App;