import {content} from "./content";
import styled from "styled-components";
import {Card} from "./Card";
import {PermamentFeatures} from "./PermamentFeatures";
import "./home.css"

export default function Home() {

    const ContentList = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
      grid-template-rows: repeat(auto-fill, 200px);
      gap: 30px;
      background-color: #83aed9;
      padding: 20px;
      position: relative;
      mix-blend-mode: multiply;
    `;

    const sideContent = () => {
        return (
            <div>
                <h2>Portfolio</h2>
                <div className="padding" >
                    <a className="link" href="https://github.com/Exilic/portfolio" target="_blank" rel="noreferrer">GitHub repository</a>
                </div>
            </div>
        )
    }

    return (
            <PermamentFeatures setId="main-container" overview={true} sideContent={sideContent()}>
                <ContentList>
                    {content.map((links, index) => (<Card index={index} links={links} />))}
                </ContentList>
            </PermamentFeatures>
    );
}