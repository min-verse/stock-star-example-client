import React from "react";
import Card from 'react-bootstrap/Card';


function NewsFeature({ featured }) {

    const { headline, datetime, image, summary, url, source } = featured;



    return (
        <div className="news-card">
            <h6>{headline}</h6>
            <div style={{ width: '80%', height: '30%' }}>
                <img src={image} alt={headline} style={{ objectFit: 'cover' }} />
            </div>
            <p>{summary}</p>
            <small>Source: {source}</small>
            <a href={url}>Read More</a>
        </div>
    );
}

export default NewsFeature;
