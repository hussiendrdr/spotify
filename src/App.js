import React,{useEffect,useState} from 'react';
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import {DataLayer} from "./DataLayer";
import{useDataLayerValue} from"./DataLayer";




const spotify = new SpotifyWebApi();
function App() {



const[{ user,token,playlists },dispatch]=useDataLayerValue();
const s="ut4muuidtha4hcgtknh2diiqu";
useEffect(()=>{

const hash = getTokenFromUrl();
window.location.hash="";
const _token = hash.access_token;
if(_token){
	dispatch({
     type:"SET_TOKEN",
     token:_token,

    })
spotify.setAccessToken(_token);
spotify.getMe().then(user=>{
		dispatch({
        type:'SET_USER',
        user:user

		});

	});
spotify.getUserPlaylists().then((playlists)=>{
  dispatch({
    type:"SET_PLAYLISTS",
    playlists:playlists,
  });
});


spotify.getPlaylist('31ka6elaknsan3ei2riw65ackz64').then(response=>{
  dispatch({
      type:"SET_DISCOVER_WEEKLY",
      discover_weekly: response,


  });
});


}



  },[]);

 return (<div className="app">

{
token ? (<Player spotify={spotify} />
	)
:
(
	<Login/>
	)

}



{/* login with spotify */}



  </div>
    )
}

export default App;
