export const initialState={
user:{},
playlists:[],
playing:false,
items:null,

// token:'BQDQoVaaH1ok13ekcJ5rS-ekY09Tb7gSULH_GCsGE_LCu9fSLPnkXmxEBYUyDrT7kfMHw6YEU0aWnx8WDydjs8-7gWzbb_dLZ2biJhyyhJa4u6JlMLm_WLDa0yulFyZP3jMpJP5ZRO-43AeEygo_8gdeGWWqltnBOYtzmJ4aUS1RNS8GBbiR',

};


const reducer =(state,action)=>{



switch(action.type){
case 'SET_USER':
return{
	...state,
	user:action.user,
       };
       case "SET_TOKEN":
       
       return {
         ...state,
         token:action.token,

       };
       case 'SET_PLAYLISTS':
       return{
       ...state,
       playlists:action.playlists,

       };

 case 'SET_DISCOVER_WEEKLY':
       return{
       ...state,
       discover_weekly:action.discover_weekly,

       };


       default:
       return state;


}


}

export default reducer;