import React, { useState, useEffect} from 'react';
import './TagPage.css';
import { Toplog, Bottom } from './App.js';
import { displayTime } from './RecentCallsPage.js';
import NoCallsImage from './images/noCallsImage.jpg';

const TagPage = (props) => {

    const [tagCallList, setTagCallList] = useState([]);
 
    useEffect(() => {
      // GET request using fetch inside useEffect React hook
      fetch('http://localhost:5000/tagCallList/' + props.match.params.tag)
        .then(response => response.json())
        .then(data => setTagCallList([...data]))
        .catch(error => {
          console.error('There was an error with /tagCallList/:tag !!', error);
        });

    // if param changes, reload the page and therefore make new fetch request
    }, [props.match.params.tag]);

    let numberOfCallsWithTag = tagCallList.length;

    const displayList = tagCallList.map(call =>
      <Call key={call.callID} onGoing={call.onGoing} callName={call.callTitle} 
            link={"/chatroom?id=" + call.callID + "?title=" + call.callTitle} duration={displayTime(call.timeStarted)} numPeople="X"
            callTag={call.callTag}/>)

    if (numberOfCallsWithTag === 0) {
      return (
        <div>
          <Toplog />
          <div className="page">
            <div className="grayButton">
              {"No Calls with Tag: " + props.match.params.tag + "!"}
            </div>
            <img className="no-calls-image" alt="" src={NoCallsImage} />
            <div className="grayButton">
              <a href={"/tagpage/" + props.match.params.tag}>
                Refresh
              </a>
            </div>
          </div>
          <Bottom />
        </div>
      )
    }
    else {
      return (
        <div>
          <Toplog />
          <div className="page">
            <div className="grayButton">
              {numberOfCallsWithTag + " Calls with Tag: " + props.match.params.tag}
            </div>
            <div className="callsList">
              {displayList}
            </div>
            <div className="grayButton">
              <a href={"/tagpage/" + props.match.params.tag}>
                Refresh
              </a>
            </div>
          </div>
          <Bottom />
        </div>
    )
  }
}


const Call = (props) => {
    return (
      <div key={props.callName} className="call" >
        <a className="link" href={props.link}>
          {props.callName + ", tag: " + props.callTag}
        </a>
        <div className="stats">
          <div className="duration">
            Start Time: {props.duration}
          </div>
          <div className="people">
            Number of People: {props.numPeople}
          </div>
        </div>
      </div>
    )
  }

  export default TagPage
