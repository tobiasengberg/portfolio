import styled from "styled-components";

const ContentCard = styled.div`
      border: 1px solid black;
      border-radius: 20px;
      overflow: hidden;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
      font-size: 14px;
      height: 200px;   
      position: relative;
      img {
        width: 100%;
        object-fit: contain;
      }
      section {
        padding: 4px 4px 8px 8px;

        span {
          color: #53789d;
        }

        p {

        }
      }
    `;

export const Card = ({index, links}) => {

    return (
        <ContentCard>
            <a key={index} href={links[0]}>
            <img src={`/portfolio/#img/${links[1]}`} alt={links[2]}/>
            <section>
                <h3><span>Subject:</span> {links[3][0]}</h3>
                <p>{links[3][1]}</p>
            </section>
            </a>
        </ContentCard>
    )
}