import styled from "styled-components";

export const Card = ({index, links}) => {

    const ContentCard = styled.main`
        a {
          text-decoration: none;
          color: inherit;
          div {
            border: 1px solid black;
            border-radius: 20px;
            overflow: hidden;
            background-color: white;
            img {
              width: 100%;
              object-fit: contain;
            }
            p {
              font-size: 20px;
            }
          }
        }
    `;

    return (
        <ContentCard>
            <a key={index} href={links[0]}>
                <div>
                <img src={`/img/${links[1]}`} alt={links[2]}/>
                <p>{links[3]}</p>
                </div>
            </a>
        </ContentCard>
    )
}