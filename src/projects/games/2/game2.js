import {useState} from "react";
import {cardNames, cardPairs} from "./cards";
import {MemorialCard} from "./MemorialCard";
import {PhotoCredits} from "./PhotoCredits";
import {NavLink} from "react-router-dom";
import {PermamentFeatures} from "../../../site/PermamentFeatures";


export const Game2 = () => {
    const [amount, setAmount] = useState(20);

    const newGame = () => {
        const cards = [];
        for (let i = 0; i < amount * 2; i++) {
            cards.push({ image: cardNames[i], reveal: false, play: true });
        }
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let k = cards[i];
            cards[i] = cards[j];
            cards[j] = k;
        }
        return cards;
    };

    const [cardMix, setCardMix] = useState(newGame);
    const [guesses, setGuesses] = useState(0);
    const [firstGuess, setFirstGuess] = useState(-1);
    const [secondGuess, setSecondGuess] = useState(-1);
    const [solved, setSolved] = useState(0);
    const [turns, setTurns] = useState(0);

    const compare = () => {
        if (cardPairs[cardMix[firstGuess].image] === cardMix[secondGuess].image) {
            remove();
            setSolved(solved + 1);
        } else {
            flip(firstGuess);
            flip(secondGuess);
        }
        setGuesses(0);
        setFirstGuess(-1);
        setSecondGuess(-1);
    };

    const choose = index => {
        if (guesses === 0) {
            setGuesses(1);
            setFirstGuess(index);
            flip(index);
            console.log('first');
        } else if (guesses === 1) {
            setGuesses(2);
            setTurns(turns + 1);
            setSecondGuess(index);
            flip(index);
            console.log('second');
        } else {
            compare();
        }
    };

    const remove = () => {
        const newCardMix = [...cardMix];
        newCardMix[firstGuess].play = false;
        newCardMix[secondGuess].play = false;
        setCardMix(newCardMix);
    };

    const flip = index => {
        const newCardMix = [...cardMix];
        newCardMix[index].reveal = newCardMix[index].reveal ? false : true;
        setCardMix(newCardMix);
    };

    const restart = () => {};
    return (
        <PermamentFeatures setId="playGround">
                {solved !== amount ? (
                    cardMix.map((card, index) => (
                        <MemorialCard card={card} index={index} key={index} choose={choose} />
                    ))
                ) : (
                    <div>
                        <h1>Game finished in {turns} turns</h1>
                        <button onClick={restart}>Restart</button>
                    </div>
                )}
                <PhotoCredits/>
            </PermamentFeatures>
    );
}