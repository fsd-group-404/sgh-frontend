import React from 'react';
import GroupCard from './GroupCard';

const GroupGallery = ({ groups }) => {
    return (
        <div className="group-gallery">
            {groups.map(group => (
                <GroupCard key={group.id} group={group} />
            ))}
        </div>
    );
};

export default GroupGallery;
