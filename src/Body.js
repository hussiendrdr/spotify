import React from 'react';
import "./body.css";
import Header from"./Header";
import{useDataLayerValue} from"./DataLayer";
import { IoIosSkipBackward } from "react-icons/io";
import {AiFillHeart,AiFillCustomerService } from "react-icons/ai";
import { BiCaretRightCircle,BiDotsHorizontal } from "react-icons/bi";

function Body({spotify}) {

const[{ playlists },dispatch]=useDataLayerValue();
	return (

<div className="body">


<Header spotify={spotify} />

<div className="body_info">
<strong>MY PLAYLIST</strong>

</div>




<div className="body_icons">

<BiCaretRightCircle className="body_shuffle"/>
<AiFillCustomerService fontSize="large"/>
<BiDotsHorizontal/>
</div>

<div className="images">
{playlists?.items?.map(playlist=>(<>
	<p className="name" > {playlist.name} </p>
	
<img className="images"  src={playlist.images[0].url} alt="" />


</>

))}

</div>







</div>
 
    )
}

export default Body;
