// import React, { useState } from 'react';
import React from 'react';


function DanielComp(props) {
    // console.log(props);
    // const [count, setCount] = useState(1000);
    function myOnClick(e) {

        // setCount(count + 1);
        //  console.log('We just clicked DanielComp', count);
        // console.log('We just clicked DanielComp');
        // props.countFunc();
    }
    return (
        <div>
            <h1 onClick={props.countFunc}>Hello World from Daniel. {props.countx}</h1>
            {/* <h1 onClick={myOnClickCount}>Hello World:count {count}</h1> */}
        </div>
    );
}
export default DanielComp;