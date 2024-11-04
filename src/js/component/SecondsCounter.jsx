import React from 'react';

  let SecondsCounter = (props) => {
  let {seconds} = props;
  let s1 = Math.floor((seconds / 10)%10);
  let s2 = Math.floor((seconds) % 10);
  let m1 = Math.floor(seconds / 600);
  let m2 = Math.floor(seconds / 60);
  let h1 = Math.floor(seconds / 3600);
  let h2 = Math.floor(seconds / 360);

console.log(s1,s2);

  return (
    <>
      <div className="text-center container-box">
        <div className="box">
          <div className="watch-cicle">
            <div className='c-center'></div>
            <div className="arrows">
              <div className="watch-arrow-1"></div>
              <div className="watch-arrow-2"></div>  
            </div>
          </div>
        </div>
           <div className="box"><h1 className='Number'>{h1}</h1></div>    
           <div className="box"><h1 className='Number'>{h2}</h1></div>    
           <div className="box"><h1 className='Number'>{m1}</h1></div>    
           <div className="box"><h1 className='Number'>{m2}</h1></div> 
           <div className="box"><h1 className='Number'>{s1}</h1></div>    
           <div className="box"><h1 className='Number'>{s2}</h1></div>    

      </div>
      <div className="text-center">
      </div>

     
    </>
  );
};

export default SecondsCounter;
