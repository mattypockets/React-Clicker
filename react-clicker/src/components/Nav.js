import React from "react";

const Nav = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h4>Overwatch Hero Clicker</h4>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <h5>Current Score: {props.currentScore}  /</h5>
      </li>
      <li class="nav-item">
        <h5>/  High Score: {props.highScore}</h5>
      </li>
    </ul>
</nav>
);
  
export default Nav;