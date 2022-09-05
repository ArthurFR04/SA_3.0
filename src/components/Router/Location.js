// import React from "react";

import {
    BrowserRouter as
        Router,
    useLocation
} from "react-router-dom";

let Historic = JSON.parse(localStorage.getItem('Historic')) !== null ? {'now': '','old': ''} : JSON.parse(localStorage.getItem('Historic'))

let nowLocation = Historic.now !== false ? Historic.now : ''
let oldLocation = Historic.old !== false ? Historic.old : ''

export function visitedPages() {

    let Location = useLocation();

    if (Location.pathname !== nowLocation) {

        oldLocation = nowLocation
        nowLocation = Location.pathname

        localStorage.setItem('Historic', JSON.stringify(
    
            {
                'now': nowLocation,
                'old': oldLocation
            }
        ))
    }



    // return "opa"
}




