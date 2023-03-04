import styled from "styled-components";
import {PermamentFeatures} from "../../site/PermamentFeatures";
import "./design1.css"

const ContentArea = styled.div`
      background-color: #f1f2f4;
    `;

const Design = styled.div`
      display: grid;
      grid-template-columns: repeat(16, 70px);
      grid-template-rows: repeat(16, 50px);  
      img {
        width: 100%;
        
      }
    `;

export const Design1 = () => {

    const sideContent = () => {
        return (
            <div>
                <h2>Drawings in ProCreate</h2>

            </div>
        )
    }

    return (
        <PermamentFeatures overview={false} sideContent={sideContent()}>
            <ContentArea>
                <Design>
                    <img id="glass6" src="/img/lines.svg" alt="contour lines"/>
                    <img id="glass1" src="/img/glass-1.png" alt=""/>
                    <img id="glass2" src="/img/glass-2.png" alt=""/>
                    <img id="glass3" src="/img/glass-3.png" alt=""/>
                    <img id="glass4" src="/img/glass-4.png" alt=""/>
                    <img id="glass5" src="/img/glass-5.png" alt=""/>
                    <p id="glass7">Some text<br/>thoughts</p>
                    <p id="glass8">More text impressions</p>
                    <p id="glass9">More text impressions</p>
                    <p id="glass10">Simple</p>
                </Design>
            </ContentArea>
        </PermamentFeatures>
    );
}