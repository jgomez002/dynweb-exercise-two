import React, { useMemo } from "react";

function ArticleCard({description, date, imageAlt, imageSrc, title, id}){
       const articleDate = useMemo(() => {
        const parsedDate = new Date(date);
        return parsedDate.toDateString();}, [date]
       );
    return (
        <div className="articleCard">
            <div className="articleCard--image">
                <img src={imageSrc} alt={imageAlt}/>
            </div>
            <div className="articleCard--text">
            <h2>{title}</h2>
                <p className="date">{articleDate}</p>
                <p className="description"> {description}</p>
                <p className="articleCard--link"> <a href={`/article/${id}`}>Read More</a> </p>
            </div>
        </div>
    );
}

export default ArticleCard;