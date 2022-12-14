import React from 'react'


const Timer = ({ time }) => {
  return (
    <div>
      <span>{(time.h >= 0) ? time.h : "0" + time.h}</span>&nbsp;&nbsp;
      <span>{(time.m >= 0) ? time.m : "0" + time.m}</span>&nbsp;&nbsp;
      <span>{(time.s >= 0) ? time.s : "0" + time.s}</span>&nbsp;&nbsp;
      <span>{(time.ms >= 0) ? time.ms : "0" + time.ms}</span>&nbsp;&nbsp;
    </div>

  )
}

export default Timer