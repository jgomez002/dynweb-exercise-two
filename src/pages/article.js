import React from "react";


function Article(){
    const backgroundImageUrl = "url('https://wallpaperforu.com/wp-content/uploads/2021/06/Pompompurin-Wallpaper241600x1200.jpg')"
    return (
     <main className="article-page">
        <header className="article-page-header">
            {/* style={{
                backgroundImage: backgroundImageUrl
            }} */}
            <h1>Article Title</h1>
            <h3>Wednesday, August 22, 2019</h3>
            <h3>blah blah blah</h3>
        </header>
        <section></section>
     </main>
    );
}

export default Article;