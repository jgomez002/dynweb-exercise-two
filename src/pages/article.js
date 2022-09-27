import React from "react";
import {useParams} from "react-router";
import Data from "../components/data";


function Article(){
        const { id } = useParams();
        const articleData = Data.find((article) => 
            article.id === id);
       // console.log(articleData)

    return (
     <main className="article-page">
        <header className="article-page-header">
            <h1>{articleData.title}</h1>
            <h3>Wednesday, August 22, 2019</h3>
            <h3>blah blah blah</h3>
        </header>
        <section></section>
     </main>
    );
}

export default Article;