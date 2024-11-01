import React, { useState, useEffect } from 'react';

const Home = () => {
  const [time, setTime] = useState(0);
  const [operation, setOperation] = useState(true);
  const [IsPlay, setIsPlay] = useState(true);



  const change = () => {
    setOperation(!operation);
  }
  const toggleTimer = () => {
    setIsPlay(!IsPlay);
  }


  useEffect(() => {
        let interval;
			if (IsPlay) 
				{
					interval = setInterval(() => {
						setTime(prevTime => (operation ? prevTime + 1 : prevTime - 1));
					}, 1000);
			  }
   		 return () => clearInterval(interval);

  }, [IsPlay, operation]);

		const hours = String(Math.floor(time / 3600)).padStart(2, '0').split("");
		const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0').split("");
        const seconds = String(time % 60).padStart(2, '0').split("");

  return (
    <>
      <div className="text-center container-box">
        <div className="box">
          <div className="watch-cicle">
            <div className="arrows">
              <div className="watch-arrow-1"></div>
              <div className="watch-arrow-2"></div>  
            </div>
          </div>
        </div>
        <div className="box"><h1 className='Number'>{hours[0]}</h1></div>
        <div className="box"><h1 className='Number'>{hours[1]}</h1></div>
        <div className="box"><h1 className='Number'>{minutes[0]}</h1></div>
        <div className="box"><h1 className='Number'>{minutes[1]}</h1></div>
        <div className="box"><h1 className='Number'>{seconds[0]}</h1></div>
        <div className="box"><h1 className='Number'>{seconds[1]}</h1></div>
      </div>
	  <div className='d-flex flex-column w-25 justify-content-center align-content-center align-items-md-center mx-auto  gap-3 mt-5'>
		<label className='text-center fs-2'> TIME <br />
	  <input type='number' onChange={(e) => setTime(Number(e.target.value))} value={time} /></label>
      <input type="button" value="Start/Stop" onClick={toggleTimer} />
      <input type="button" value="Change Operation" onClick={change} />
	  </div>
     
    </>
  );
};

export default Home;
