import React from "react";

function ArticleCard({blurb, date, imageAlt, imageSrc, title}){
    return (
        <div className="paage-wrapper articlecard-wrapper">
            <div className="articleCard--image">
                <img className></img>
            </div>
            <div className="articleCard--text">
            <h2>(Title)</h2>
                <div className="date">(Date)</div>
                <div className="description">(Preview)</div>
            </div>
            <div className="articleCard--link">
             
            </div>
        </div>
    );
}

export default ArticleCard;