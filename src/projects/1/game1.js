import {TrialCircles} from "./TrialCircles";
import {FeedbackCircles} from "./FeedbackCircles";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PermamentFeatures} from "../../site/PermamentFeatures";
import styled from "styled-components";
import "./game1.css"

export const Game1 = () => {

    const navigate = useNavigate();

    const blankGuesses = new Array(12);
    for(let i = 0; i < blankGuesses.length; i++){
        blankGuesses[i] = new Array(4).fill(0);
    }

    const blankFeedback = new Array(12);
    for(let i = 0; i < blankFeedback.length; i++){
        blankFeedback[i] = new Array(4).fill("blank");
    }

    const [secret, setSecret] = useState([]);
    const [guesses, setGuesses] = useState(blankGuesses);
    const [feedback, setFeedback] = useState(blankFeedback);
    const [focused, setFocused] = useState(0);
    const [turn, setTurn] = useState(0);

    useEffect(() => {
        const temp = new Array(4);
        for(let i = 0; i < 4; i++){
            temp[i] = Math.floor(Math.random() * (6 - 1) + 1);
        }
        setSecret(temp);
    }, [])

    useEffect(() => {
        const handleKey = (e) => {
            e.preventDefault();
            if(e.key === "ArrowRight") {
                focused < 3 && setFocused(() => focused + 1);
            }
            if(e.key === "ArrowLeft") {
                focused > 0 && setFocused(() => focused - 1);
            }
            if(e.key === "ArrowDown") {
                if(guesses[turn][focused] < 6) {
                    const temp = [...guesses];
                    temp[turn][focused]++;
                    setGuesses(temp);
                } else {
                    const temp = [...guesses];
                    temp[turn][focused] = 1;
                    setGuesses(temp);
                }
            }
            if(e.key === "ArrowUp") {
                if(guesses[turn][focused] > 1) {
                    const temp = [...guesses];
                    temp[turn][focused]--;
                    setGuesses(temp);
                } else {
                    const temp = [...guesses];
                    temp[turn][focused] = 6;
                    setGuesses(temp);
                }
            }
            if(e.key === "Enter") {
                if(!guesses[turn].includes(0)){
                    let correct = 0;
                    let elligble = [0, 1, 2, 3];
                    for(let i = 0; i < 4; i++){
                        if(guesses[turn][i] === secret[i]) {
                            correct++;
                            let index = elligble.findIndex(a => a === i);
                            elligble.splice(index, 1);
                        }
                    }
                    const temp = [...feedback];
                    for(let t = 0; t < correct ; t++){
                        temp[turn][t] = "black";
                    }
                    if(elligble.length > 1){
                        let duplicate = [...elligble];
                        for(let p = 0; p < elligble.length; p++){
                            let h = duplicate.findIndex(m => guesses[turn][m] === secret[elligble[p]]);
                            if(h !== -1) {
                                temp[turn][correct] = "white";
                                correct++;
                                duplicate.splice(h, 1);
                            }
                        }
                    }
                    setFeedback(temp);
                    setTurn(() => turn + 1);
                    setFocused(() => 0);
                } else {
                    setFocused(() => guesses[turn].findIndex(a => a === 0));
                }
            }
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey)
    }, [focused, turn, guesses, feedback, secret]);

    const sideContent = () => {
        return (
            <div>
                <h2>Stuff with mastermind</h2>
                <p>Black feedback indicates the correct trial color in the right position</p>
                <p>White feedback could be turned into black if a trial color were placed in another position</p>
            </div>
        )
    }

    const ContentArea = styled.div`
      background-color: #555;
      padding: 50px 0 0 200px;
      display: grid;
      grid-template-columns: 300px 400px;
      gap: 30px;
    `;

    const Game = styled.div`
      display: grid;
      grid-template-columns: 180px 50px;
      background-color: #555;
      width: 300px;
      height: 500px;
      padding: 20px;
    `

    const Info = styled.div`
      padding: 20px;
      color: #777;
      h3 {
        font-size: 30px;
        span {
          color: #aaa;
        }
      }
    `

    return (
        <PermamentFeatures setId="gameArea2" overview={false} sideContent={sideContent()}>
            <ContentArea>
                <Game>
                    <div className="trials">
                    {guesses.map((circles, index) => {
                        return (
                        <TrialCircles key={index} toShow={circles} focused={focused} turn={index === turn} />
                        )
                    })}
                    </div>
                    <div className="feedback">
                        {feedback.map((circles, index) => {
                            return (
                                <FeedbackCircles key={index} toShow={circles} />
                            )
                        })}
                    </div>
                </Game>
                <Info>
                    <h3><span>&larr;</span> and <span>&rarr;</span> change focus</h3>
                    <h3><span>&uarr;</span> and <span>&darr;</span> change color</h3>
                    <h3><span>&crarr;</span> submit completed trial</h3>
                    <h3><br/>Feedback of blacks and whites indicate the total number of correct colors in the proposed trial. Blacks indicate correct place, white incorrect. The position of feedback signs has no significance.</h3>
                </Info>
            </ContentArea>
        </PermamentFeatures>
    )
}