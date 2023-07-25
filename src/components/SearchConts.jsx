import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Videos } from '.';
import Loader from './Loader';

const SearchConts = () => {
    const [videos, setvideos] = useState(null);
    const { searchTerm } = useParams();
    useEffect(() => {
        fetch(
            // 'https://webstoryboy.github.io/site-youtube01/src/utils/test.json',
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchTerm}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
        )
            .then(response => response.json())
            .then(result => console.log(setvideos(result.items)))
            .catch(error => console.log(error));
    }, [searchTerm]); //저장방법

    if (!videos) return <Loader />;

    return (
        <main id="main">
            <section id="contents">
                <h2>{searchTerm} 검색 결과</h2>
                <Videos videos={videos} />
            </section>
        </main>
    );
};

export default SearchConts;
