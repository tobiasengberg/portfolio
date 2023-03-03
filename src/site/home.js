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
    `;

    const sideContent = () => {
        return (
            <div>
                <h2>Stuff with overview</h2>
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