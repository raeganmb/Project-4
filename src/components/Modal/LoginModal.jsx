import React from "react";

export default function Modal(props) {
    return ( 
    <>
    {
        props.show ? props.children : null
    }
    </>
    )
    
}