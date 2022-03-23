import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as activityActions from "./state/reducer"
import { useEffect } from 'react';

function App(props) {
  console.log(props)
  const { getNewActivity, activity } = props
  
  useEffect(()=>{
    getNewActivity()
  }, [])

  const onClick = evt => {
    evt.preventDefault()
    getNewActivity()
  }
  return (
    <div className="App">
      <h1>Random Activity Generator</h1>
      <div className='explanation'>
        Are you bored? Don't know what to do?<br/>
        Allow our generator to give you some ideas.<br/>
        Just give it a push below and find your<br/>
        next amazing activity!
      </div>
      <div className='activity-display'>
        <div className='activity'>Activity:</div>
        {activity.activity}
        <div className='type'>Type:</div>
        {activity.type}
      </div>
      <button onClick={onClick}>Get New Activity</button>
    </div>
  );
}

export default connect(state=>state, activityActions) (App);