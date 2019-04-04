import React, { Component } from 'react';
import ReactDom from 'react-dom';


export class Footer extends React.Component {
    displayName = Footer.name
  

  render() {
    return (
        <footer>
        <div class="row">
            <div class="col-md-4 col-sm-6 footer-navigation">
                <h3><a href="#">SP18.PF.<span>G07 </span></a></h3>
                <p class="links">
                    <ul>
                        <li>Aimee Sherrod</li>
                        <li>Sara Roberts</li>
                        <li>Joseph Schenk</li>
                        <li>Daniela Rayagadas</li>
                    </ul></p>
                <p class="company-name">CMPS 383 © 2018 </p>
            </div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-md-4 footer-about">
                <h4>About this project</h4>
                <p> This React Application was created by students enrolled in Dr. Alkadi's CMPS 383 in the Spring of 2018.  Criteria established by Envoc.
                </p>
            </div>
        </div>
    </footer>
    );
  }
}