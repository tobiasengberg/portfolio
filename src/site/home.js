import {content} from "./content";
import styled from "styled-components";
import {Card} from "./Card";
import {PermamentFeatures} from "./PermamentFeatures";

export default function Home() {

    const ContentList = styled.main`
      display: grid;
      grid-template-columns: repeat(auto-fill, 200px);
      gap: 30px;
    `;

    return (
            <PermamentFeatures setId="main-container">
                <ContentList>
                    {content.map((links, index) => (<Card index={index} links={links} />))}
                </ContentList>
            </PermamentFeatures>


    );
}