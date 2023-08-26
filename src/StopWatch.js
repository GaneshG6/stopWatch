import React,{useState, useEffect} from "react";
import './StopWatch.css';
import bootstrap from 'bootstrap';

export default function StopWatch() {
    const [hours, setHours] = useState("00");
    const  [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [milliSeconds, setMilliSeconds] = useState("00")
    const [start, setStart] = useState(false)

    useEffect(()=>{
        if(start){
            if (minutes==60){
                setMinutes("00")
                setHours(hours=>{
                    let add = parseInt(hours)+1
                    return hours<9 ? "0"+add : ""+add
                })
                setSeconds("00")
            }
            if(milliSeconds!= 59){
                const interval = setInterval(() => {
                    setMilliSeconds(milliSeconds => {
                        let add = parseInt(milliSeconds) + 1
                        return milliSeconds<9 ? "0"+add : ""+add
                    });
                  }, 10);
                  return () => clearInterval(interval);
            }
            if(seconds==59){
                setMinutes(min=>{
                    let add = parseInt(min)+1
                    return min<9 ? "0"+add : ""+add
                })
                setSeconds("00")
                setMilliSeconds("00")
            }
            else {
                setSeconds(sec=>{
                    let add = parseInt(sec)+1
                    return sec<9 ?"0"+ add : ""+add
                })
                setMilliSeconds("00")
            }
        }
        
       
    })
    console.log(milliSeconds,seconds);
    return (
        <>
        <div className="time-box col-lg-5 col-md-6 col-sm-12 bg-info p-4 mx-auto position-relative">
               <p className="name mb-0 text-white"> Stop Watch</p> 
               <h2 className="project-name text-white">UseEffect Project</h2>
            <div className="time-container d-flex flex-row align-items-baseline 
            justify-content-around bg-white position-absolute">
                <div className="time d-flex flex-column justify-content-center align-items-center">
                    <h1>{hours}</h1>
                    <p className="time-name">HOURS</p>
                </div>
                <div>
                    <h1 className="isto">:</h1>
                </div>
                <div  className="time d-flex flex-column justify-content-center align-items-center">
                    <h1>{minutes}</h1>
                    <p className="time-name">MINUTES</p>
                </div>
                <div>
                    <h1 className="isto">:</h1>
                </div>
                <div  className="time d-flex flex-column justify-content-center align-items-center">
                    <h1>{seconds}</h1>
                    <p className="time-name">SECONDS</p>
                </div>
                <div>
                    <h1 className="isto">:</h1>
                </div>
                <div className="time d-flex flex-column justify-content-center align-items-center">
                    <h1>{milliSeconds}</h1>
                    <p className="time-name">MILLI</p>
                </div>
                
            </div>
                <div className="btn-pause position-absolute"><button className="btn btn-primary rounded-circle" onClick={()=>{setStart(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
</svg>
                    </button></div>
                <div className="btn-start position-absolute"><button className="btn btn-primary rounded-circle" onClick={()=>{setStart(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg></button></div>
                <div className="btn-reset position-absolute"><button className="btn btn-primary rounded-circle" onClick={()=>{setHours("00")
            setMinutes("00")
            setSeconds("00")
            setMilliSeconds("00")
            setStart(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-square-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/>
</svg>
                </button></div>
        </div>
        </>
    )
}