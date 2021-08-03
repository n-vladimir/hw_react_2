import React from 'react';


function WatchView(props) {
  return (
      <div>
        <span>{(props.time.h >= 10) ? props.time.h : '0' + props.time.h} : </span>
        <span>{(props.time.m >= 10) ? props.time.m : '0' + props.time.m} : </span>
        <span>{(props.time.s >= 10) ? props.time.s : '0' + props.time.s} : </span>
        <span>{(props.time.msms >= 10) ? props.time.msms : '0' + props.time.msms}</span>
      </div>
  );
}

export default WatchView;