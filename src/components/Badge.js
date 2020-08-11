import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Logo from '../../images/logo.svg';
import Profile from '../../images/profile.png';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Badge.css';
import '../global.css';

class Badge extends Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={Logo} alt='Logo de la conferencia' />
        </div>

        <div className='Badge__section--name'>
          <img className='Badge__avatar' src={Profile} alt='Avatar' />
          <h1>
            Ulises
            <br />
            Sámano
          </h1>
        </div>

        <div className='Badge__section--info'>
          <h3>Frontend-Developer</h3>
          <div>@Ulises5G</div>
        </div>

        <div className='Badge__footer'>
          <p>#PlatziConf</p>
        </div>
      </div>
    );
  }
}

export default hot(module)(Badge);
