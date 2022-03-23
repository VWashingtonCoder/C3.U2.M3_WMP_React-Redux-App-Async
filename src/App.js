import React from 'react';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as activityActions from "./state/reducer"
import { useEffect } from 'react';

const  StyledActivites = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  h1{
    font-family: 'Lato', sans-serif;
    font-size: 3rem;
    font-weight: 600;
  }
  .explanation{
    font-family: 'Lato', sans-serif;
    width: 85%;
    font-size: 1.5rem;
    font-weight: bold;
  }
`


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
    <div className='App'>
      <StyledActivites>
        <h1>Random Activity Generator</h1>
        <p className='explanation'>
          Are you bored? Don't know what to do?
          Allow our generator to give you some ideas.
          Just give it a push below and find your next amazing activity!
        </p>
        <div className='activity-display'>
          <div className='activity'>
            <p> Activity: </p>
            {activity.activity}
          </div>
          
          
          
        </div>
        <button onClick={onClick}>Get New Activity</button>
      </StyledActivites>
    </div>
  );
}

export default connect(state=>state, activityActions) (App);