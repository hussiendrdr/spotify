import React from 'react';
import "./login.css"
import {loginUrl} from"./spotify";

function Login() {
  
  
 return (<div className="login">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Spotify_logo_vertical_black.jpg/1200px-Spotify_logo_vertical_black.jpg" alt=" "/>
<a href={loginUrl}>login</a>

  </div>
    )
}

export default Login;
