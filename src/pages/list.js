import React from "react";
import ArticleCard from "../components/articlecard";
import Data from "../components/data"


function List(){
    return(
        <main className="page-wrapper">
            <h1>Articles</h1>
            {Data.map((article,i) => (
                 <ArticleCard 
                 key = {i}
                 description = {article.blurb}
                 date = {article.publishedDate}
                 title= {article.title}
                 imageAlt ={article.image.alt}
                 imageSrc= {article.image.src}
                 />
            ))}
        </main>
    );
}

export default List;