import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Child from './Components/Child';
import { useCallback, useState } from 'react';


function App() {
 const arr = []

  const [ darkmode, setdarkmode ] = useState(false)
  const [ bluemode, setbluemode ] = useState(false)


  const dark = {
    color: 'pink',
    backgroundColor: 'black',
    
    height:'100vh'


  }
  const light = {
    color: 'black',
    backgroundColor: 'white'

  }

  const blue = {
    color: 'black',
    backgroundColor: 'lightblue',
    height:'100vh'

  }
 
 
  
  
  return (
    <>
    <div className="container-fluid" style={darkmode ? dark : (bluemode ? blue : light)}>
    <Navbar style={darkmode ? dark : (bluemode ? blue : light)} darkmode={darkmode} setdarkmode={setdarkmode} bluemode={bluemode} setbluemode={setbluemode} />
  
    <Child heading={"TextUtils- analyze & edit text"} num={arr} style={darkmode ? dark : (bluemode ? blue : light)}/>
    </div>
    

</>
  );
  }
export default App;
