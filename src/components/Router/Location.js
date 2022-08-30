// import React from "react";

import {
    BrowserRouter as
        Router,
    useLocation
} from "react-router-dom";


let nowLocation
let oldLocation

export function visitedPages() {
    
    let Location = useLocation();
    
    if (Location.pathname !== nowLocation) {
        
        oldLocation = nowLocation = false ? '' : nowLocation
        nowLocation = Location.pathname
        

        console.log('now:  ' + nowLocation);
        console.log('old:  ' + oldLocation);
    }
}




