//Ismael Rodriguez, ismaro.394 at gmail dot com
//Resume page component
import React, { Component } from 'react';
import './PageResume.css';

class PageResume extends Component {

  render() {

    return (
      <div>
        <h1 className="text-center"><strong>Resume</strong></h1>
        <img id="cvImg" src={process.env.PUBLIC_URL + '/images/resume.png'}></img>
      </div>
      
    );

  }
}

export default PageResume;
