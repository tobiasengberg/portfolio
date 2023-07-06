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
                <h2>Drawings</h2>
                <p>A case of design by drawing, carried out on an iPad in the app Procreate. Drawings assembled and given a mirror effect in Adobe PhotoShop.</p>
                <div className="padding" >
                    <a className="link" href="https://procreate.com" target="_blank" rel="noreferrer">Procreate</a>
                </div>
                <p className="padding">The capability of recognizing something as something else works on a level of effects. A drawing effect can thus evoke an experience of artefact. The overall sense though, is one of possible revelation.</p>
                <p>The design intentionality stems from drawing strategies that have become habitual.</p>
            </div>
        )
    }

    return (
        <PermamentFeatures overview={false} sideContent={sideContent()}>
            <ContentArea>
                <Design>
                    <img id="glass6" src="/portfolio/#img/lines.svg" alt="contour lines"/>
                    <img id="glass1" src="/portfolio/#img/glass-1.png" alt=""/>
                    <img id="glass2" src="/portfolio/#img/glass-2.png" alt=""/>
                    <img id="glass3" src="/portfolio/#img/glass-3.png" alt=""/>
                    <img id="glass4" src="/portfolio/#img/glass-4.png" alt=""/>
                    <img id="glass5" src="/portfolio/#img/glass-5.png" alt=""/>
                    <p id="glass7">Increased color<br/> saturation<br/>invoking<br/>an inside</p>
                    <p id="glass8">Light colors invoking glimmering</p>
                    <p id="glass9">Transparency as a color phenomena</p>
                    <p id="glass10">Single stroke of light color<br/>  invoking a cut surface</p>
                </Design>
            </ContentArea>
        </PermamentFeatures>
    );
}