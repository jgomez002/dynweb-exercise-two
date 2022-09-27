import React from "react";
import ArticleCard from "../components/articlecard";


function List(){
    return(
        <main className="page-wrapper">
            <h1>Articles</h1>
            <ArticleCard 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            date = "04/02/2003"
            title= "articleTitle"/>
            <ArticleCard />
            <ArticleCard />
        </main>
    );
}

export default List;