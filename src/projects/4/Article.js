
export const Article = ({content}) => {
    return (
        <div className="article-container">
            <div>
                {content.urlToImage != null ?
                    <img src={content.urlToImage} alt="related to article"/>
                    :
                    <img src="/portfolio/img/replacement.png" alt="missing link"/>
                }

                <h3 className="article-title">{content.title}</h3>
                <p className="article-date">Published {content.publishedAt.substring(0, 10)}</p>
                <h4 className="article-author">By {content.author}</h4>
                <p className="article-description">{content.description}</p>
            </div>
           <p className="article-source">
               <a href={content.url} target="_blank" rel="noreferrer" >{content.source.name} &#8674;</a>
           </p>
        </div>
    )
}