import React, { useState } from 'react';
import MessageSize from './mesage_size';


// ffc will create this function
function Message(props) {
    //state-hooks
    const [likes, updateLikes] = useState(0)

    //dynamic for likes
    const increaseLikes=()=>{
        updateLikes(likes + 1) 
    }

    return ( 
        <div>
            {/* using prop */}
            <p>
                Message {props.children}: {props.msg}
                <br />
                <button onClick={increaseLikes}>Like</button>{likes}
                <br />
                Size: <MessageSize msg={props.msg}></MessageSize>

            </p>

        </div>
     );
}

export default Message;