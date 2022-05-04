import React from 'react';
import Button from '../common/Button';

function ProfileCard ({handleProfileFilled}) {
    return(
        <>
            <div className="profile__card">
                <h2>Profile card</h2>
                <Button title={"Change User Info"} />
            </div>
        </>
    )
}

export default ProfileCard;