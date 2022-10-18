import React, {FC} from 'react';
import {isOffline} from "../../helpers/network";

const NetworkStatus:FC = () => {

    return (
        <div>
            {isOffline ? <div>You are Offline and may view old content 😥</div> : <div>You are online ☺</div>}
        </div>
    );
};

export default NetworkStatus;
