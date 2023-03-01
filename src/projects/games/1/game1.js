import {TrialCircles} from "./TrialCircles";
import {FeedbackCircles} from "./FeedbackCircles";
import {useEffect, useState} from "react";

export const Game1 = () => {

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

    return (
        <div className="gameArea">
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
        </div>
    )
}