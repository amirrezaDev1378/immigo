import React, {FC, useState} from 'react';
import {isOffline} from "../../helpers/network";

const NetworkStatus: FC = () => {
    const [isOnline, setIsOnline] = useState(!isOffline);
    window.addEventListener("offline", () => {
        setIsOnline(false)
    })
    window.addEventListener("online" , ()=>{
        setIsOnline(true)
    })
    return (
        <div>
            {!isOnline ? <div>You are Offline and may view old content 😥</div> : <div>You are online ☺</div>}
        </div>
    );
};

export default NetworkStatus;
