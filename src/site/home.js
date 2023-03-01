import {content} from "./content";
import styled from "styled-components";
import {Card} from "./Card";

export default function Home() {

    const ContentList = styled.main`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 30px;
    `;

    return (

            <div id="main-container">
                <h1>React Router Contacts</h1>
                    <ContentList>
                        {content.map((links, index) => (<Card index={index} links={links} />))}
                    </ContentList>
            </div>


    );
}