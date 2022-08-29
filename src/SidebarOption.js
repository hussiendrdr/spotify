import React from 'react';
import "./sidebaroption.css";



function SidebarOption({title,Icon}) {
	return (
<div className="SidebarOption">

<p>{Icon && <Icon className="SidebarOption_icon" />}</p>
<p className="title">{title}</p>

</div>


  
    )
}

export default SidebarOption;
