import React from "react";
import ArticleCard from "../components/articlecard";


function List(){
    return(
        <main className="page-wrapper">
            <h1>Articles List</h1>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </main>
    );
}

export default List;