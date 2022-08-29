import React ,{useState}from 'react';
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { ImHome,ImSearch,ImMusic } from "react-icons/im";
import {useDataLayerValue} from"./DataLayer";

function Sidebar() {
const[{ playlists },dispatch]=useDataLayerValue();


	return (

<div className="sidebar">
<img  className="sidebar_logo"
src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg" alt=""/>
<SidebarOption  Icon={ImHome} title="Home" />
<SidebarOption Icon={ImSearch} title="Search" />
<SidebarOption Icon={ImMusic} title="Your Library" />

<strong className="sidebar_title">PLAYLIST</strong>
<br />
<hr />

{playlists?.items?.map(playlist=>(
	
<SidebarOption  title={playlist.name} />

))}

{console.log('hhhhhhh',playlists)}

</div>


  
    )
}

export default Sidebar;
