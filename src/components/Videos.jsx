import React from 'react';
import { VideoCard } from './';

const Videos = ({ youtubes }) => {
    return (
        <div className="videos__inner">
            {youtubes.map((youtube, index) => (
                <VideoCard key={index} video={youtube} />
            ))}
        </div>
    );
};

export default Videos;
