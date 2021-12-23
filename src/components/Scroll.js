import React from 'react'

const Scroll = (props)=>{
    return(
        <div style={{overflowY: 'scroll', border:'1px solid white', height:'78vh'}}>
            {props.children}
        </div>
    )
}


export default Scroll;