import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Logo from '../../images/logo.svg';
import Profile from '../../images/profile.png';

class Badge extends Component {
  render() {
    return (
      <div className='Badge'>
        <div>
          <img src={Logo} alt='Logo de la conferencia' />
        </div>
        <div>
          <h1>
            Ulises
            <br />
            SG
          </h1>
        </div>
        <div>
          <img src={Profile} alt='Avatar' />
          <p>Frontend-Developer</p>
          <p>@Ulises5G</p>
        </div>
        <div>
          <p>#PlatziConf</p>
        </div>
      </div>
    );
  }
}

export default hot(module)(Badge);
