import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component{
  state={
    IsLoging:true
  }
/*authButton=()=>{
  const{IsLoging}=this.state
  if(IsLoging===true){
    return <button>Log Out</button>
  }return <button>Log In</button>
} if else statement */
 Toggole=()=>{
this.setState(last=>{
  const{IsLoging}=last
  return{
    IsLoging:!IsLoging
  }
})
 }
  render(){
    
    const{IsLoging}=this.state
   /* let authButton
    if(IsLoging){
      authButton=<button>Log Out</button>
    }else{
      authButton=<button>Log In</button>
    } using variable element */ 
    return(
      <div className='container'>
        <Welcome name="madhu" greeting="friend"/>
        <button type="button" onClick={this.Toggole()}>
        {IsLoging?(<button className="button">Log Out</button>):(<button className='button'>Log In</button>)}
        </button>
       
      </div>
    )
  }
}
export default App