import React from "react"
import { Children } from 'react';

const Section = ({title,children}) => {
    return (
        <>
            <h1>{title}</h1> 
            {children}
        </>
    )
}

export default Section