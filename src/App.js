import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Crazy Labs</a>
          </div>
          <div className="social">
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/arkn98/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>You can’t stop web3. It’s ultimately code and code is just speech
              <br></br>and speech is just ideas. You can’t stop ideas.</p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
