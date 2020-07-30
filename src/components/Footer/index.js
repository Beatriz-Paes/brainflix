import React from 'react';
import { FooterBase } from './styles';
import Beahlogo from '../../assets/img/Beahlogo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/beatriz-paes/">
        <img className="Logo" src={Beahlogo} alt="Beah logo" />
      </a>
    
    </FooterBase>
  );
}

export default Footer;
