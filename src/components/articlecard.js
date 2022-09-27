import React from "react";

function ArticleCard({description, date, imageAlt, imageSrc, title}){
    return (
        <div className="articleCard">
            <div className="articleCard--image">
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className="articleCard--text">
            <h2>Article Title</h2>
                <p className="date">Wednesday, August 22, 2019</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="articleCard--link"> <a href="/article">Read More</a> </p>
            </div>
        </div>
    );
}

export default ArticleCard;