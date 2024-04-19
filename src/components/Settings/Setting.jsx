import React from 'react';

const Setting  = (props) => {

    let onPostChange = () => {
        let text = props.colorFetching?false:true;
        props.updateOnChange(text);
        debugger;
        

    }

    return (
        <div>
             <button onClick={onPostChange} >Login</button> 
        </div>
    )
    }


    export default Setting ; 