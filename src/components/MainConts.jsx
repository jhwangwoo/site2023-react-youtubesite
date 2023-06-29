import React, { useEffect, useState } from 'react';
import { Category, Videos } from './';

const MainConts = () => {
    const [selectCategory, setSelectCategory] = useState('또간집');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(
            'https://webstoryboy.github.io/site-youtube01/src/utils/test.json',
            // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${selectCategory}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log(error));
    }, [selectCategory]); //저장방법

    // if (!videos?.items) return <Loader />;
    return (
        <main id="main">
            <aside id="aside">
                <Category
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                />
            </aside>
            <section id="contents">
                <h2>{selectCategory} 유튜버</h2>
                <Videos videos={videos} />
            </section>
        </main>
    );
};

export default MainConts;
