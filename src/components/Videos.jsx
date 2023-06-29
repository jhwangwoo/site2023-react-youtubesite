import React from 'react';
import { VideoCard } from './';

const Videos = ({ videos }) => {
    return (
        <div className="videos__inner">
            {videos.map((youtube, index) => (
                <VideoCard key={index} video={youtube} />
            ))}
        </div>
    );
};

export default Videos;
