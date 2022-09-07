// import React from "react";

import {
    BrowserRouter as
        Router,
    useLocation
} from "react-router-dom";


let Historic = JSON.parse(localStorage.getItem('Historic')) === null ? {'now': '','old': ''} : JSON.parse(localStorage.getItem('Historic'))


let nowLocation = Historic.now === null ? Historic.now : ''
let oldLocation = Historic.old !== null ? Historic.old : ''

export function VisitedPages() {

    let Location = Router               // fiz somente para sumir com o warn que aparecia no console
    Location = useLocation();

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
}



