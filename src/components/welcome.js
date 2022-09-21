import React from 'react';
import ConsumeCatalogAPI from './api';
import Message from './message';

//one parent root element ONLY!!!
function Welcome() {

    let score = 88
    //continously called
    const alienShip=()=>{
        return (
            <div>I am from Mars!</div>
        )
    }
    //event - only when click the button
    const buttonClicked=()=>{
        console.log("Button clicked")
    }

    return (
        <div>
            <div>
            <h1>Welcome!</h1>
            <ol>
                <li>One</li>
                <li>Two</li>
            </ol>
            </div>
            <div>
                <h1>Score: {score}</h1>
            </div>
            <div>
                <h1>Coming from Mars: {alienShip()}</h1>
            </div>
            <div>
                <button onClick={buttonClicked}>Click</button>
            </div>
            <div>
                <Message msg="Hello from Mars">i</Message>
                <Message msg="Hello from Saturn">ii</Message>
                <Message msg="Hello from IIS">iii</Message>
                <Message msg="Learn to live on Mars!">iv</Message>
                <Message msg="Learn to live on diet pil">v</Message>
            </div>
            <div>
                <ConsumeCatalogAPI></ConsumeCatalogAPI>
            </div>
        </div>
     );
}

export default Welcome;