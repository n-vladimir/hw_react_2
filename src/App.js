import React, {useState} from 'react';
import WatchView from './components/watchView';
import Btn from './components/btn';
import './App.css';

function App() {
  const [time, setTime] = useState({msms:0,s:0,m:0,h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [timeList, setTimeList] = useState([]);
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };


  let updatedMs = time.msms,
      updateS = time.s,
      updateM = time.m,
      updateH = time.h;
  const run = () => {
    if(updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if(updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if(updatedMs === 100) {
      updateS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({msms: updatedMs,s: updateS,m: updateM,h: updateH})
  }

  const stop = () => {
    clearInterval(interv)
    setStatus(2)
    setTimeList([...timeList, time]);
  };
  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({msms: 0,s: 0,m: 0,h: 0})
  };

  const BtnContinue = () => start();
  return (
      <>
        <div className="stopWatch">
          <WatchView time={time}/>
          <Btn status={status} BtnContinue={BtnContinue} reset={reset} start={start} stop={stop}/>
        </div>
        <ul>
          {timeList.map(time => <li><WatchView time={time}/></li>)}
        </ul>
      </>
  );
}

export default App;
