import React from 'react'
import './style.css'
const Component = ({menudata}) => {}
  return (
      <>
        <section className='main-container'>
       {

       
        menudata.map((item) => {
            console.log(item.img);
            return (
            <>
            <div className='container'>
            <div className='title'>
            <span className='id'> {item.id}</span>
            <span className='heading'>{item.name}</span>
            </div>
            <p className='para'>
            {item.para}
            </p>
            <span className='img' >
            <img src={item.img} width='100%'/>
            </span>
            <span className='bottom-div'><div className='btn'>order now</div></span>
            
            </div>
           </>
            );})
       
}
</section>
</>
  );
};
   
   
 
export default Component;