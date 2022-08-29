import React from 'react';
import "./header.css";
import { BiSearch } from "react-icons/bi";
import {useDataLayerValue} from"./DataLayer";

function  Header({spotify}) {

const[{ user },dispatch]=useDataLayerValue();
const sr="user.images[0].url";
	return (

<div className="header">

<div className="header_left">
<BiSearch/>
<input
placeholder="Search for Artist, Songs, Albums"
type="text"
/>
</div>

<div className="header_right">
<img src={sr} alt="no photo"/>


<h4> {user?.display_name}</h4>
</div> 

</div>
 
    )
}

export default  Header;
