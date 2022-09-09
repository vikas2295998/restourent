import React ,{useState,useReducer} from 'react'
import Component from './component'
import Api from'./api.js'
const Resturant = () => {
    // const [item,setitem] = useState(Api);
    
    const reducer=(state,action)=>{
      
      console.log("vikas");
      if(action.type==='all'){
        state=Api;
        return state;
      }
      
      state= Api.filter((ele)=>{
        return action.type===ele.type;
    
      });
      return state;
    };
    
    
    const [state,dispatch]=useReducer(reducer,Api);
    // console.log(item);
  return (
    <>
    <div className='navbar'>
      <div className='icon'><span className='vishal'>Vishal</span><span className='dhaba'>dhaba.</span></div>
      <ul>
      <li><a onClick={()=>dispatch({type:'breakfast'})}>breakfast</a></li>
      <li><a onClick={()=>dispatch({type:'lunch'})}>lunch</a></li>
      <li><a onClick={()=>dispatch({type:'snack'})}>snack</a></li>
      <li><a onClick={()=>dispatch({type:'dinner'})}>dinner</a></li>
      <li><a onClick={()=>dispatch({type:'all'})} >all</a></li>
      </ul>
    </div>
    <Component menudata={state}/>
    
    </>
  )
}

export default Resturant;