import {PermamentFeatures} from "../../site/PermamentFeatures";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {fallbackNews} from "./fallbackNews";
import {arbitrary} from "./arbitrary";
import {Article} from "./Article";
import "./api1.css";

const ContentArea = styled.div`
      background-color: #f1f2f4;
      padding: 130px 80px 100px 50px;
    `;

const Design = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, 230px);
      column-gap: 20px;
      row-gap: 20px;
      img {
        width: 230px;
        height: 230px;
        object-fit: cover;
        
      }
    `;

export const Api1 = () => {

    const [articles, setArticles] = useState(fallbackNews);

    const calledOnce = useRef(false);
    const apiKey = `apiKey=${arbitrary()}`;
    const today = new Date();
    //const formated = today.toLocaleDateString('en-CA');
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    if (month === 0) {
        month = 12;
        year --;
    } else if (month < 10) {
        month = '0' + month;
    }
    if (day <10) {
        day = '0' + day;
    }
    const date = 'from=' + year + '-' + month + '-' + day + '&';


    useEffect(() => {
            if(calledOnce.current) {
                return;
            }
        const url = 'https://newsapi.org/v2/everything?' +
            'q="Jane Jacobs"&' +
            date +
            'sortBy=popularity&' +
            apiKey;

        const req = new Request(url);

        fetch(req)
            .then(function(response) {

                return response.json();
            })
            .then(function(result){
                console.log(result);
                setArticles(result.articles);
            })
            calledOnce.current = true;
    }, [apiKey, date]);

    const sideContent = () => {
        return (
            <div>
                <h2>API</h2>
                <p>A straightforward implementation of an article search using the News API.</p>
                <div className="padding" >
                    <a className="link" href="https://newsapi.org" target="_blank" rel="noreferrer">News API</a>
                </div>
                <p>The choice of searching for "Jane Jacobs" came from a curiosity on the subject and an estimation of a manageable amount of positives.</p>
                <div className="padding" >
                    <a className="link" href="https://github.com/Exilic/portfolio/#tree/master/src/projects/3" target="_blank" rel="noreferrer">GitHub folder</a>
                </div>
            </div>
        )
    }

    return (
        <PermamentFeatures overview={false} sideContent={sideContent()}>
            <ContentArea>
                <div className="news-logo">
                    <h1>Articles Mentioning Jane Jacobs</h1>
                    <h3>Since last month</h3>
                </div>
                <Design>
                    {articles.map((post, index) => (
                        <Article content={post} key={index}/>
                        ))
                    }
                </Design>
            </ContentArea>
        </PermamentFeatures>

    )
}