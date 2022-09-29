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
                 id= {article.id}
                 title= {article.title}
                 imageAlt ={article.image.alt}
                 imageSrc= {article.image.url} //.url not .src, review css
                 />
            ))}
        </main>
    );
}

export default List;