import {useState} from "react";
import {cardNames, cardPairs} from "./cards";
import {MemorialCard} from "./MemorialCard";
import {PermamentFeatures} from "../../site/PermamentFeatures";
import styled from "styled-components";
import "./game2.css";
import {photographers} from "./photographers";


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
        newCardMix[index].reveal = !newCardMix[index].reveal;
        setCardMix(newCardMix);
    };

    const sideContent = () => {
        return (
            <div>
                <h2>Photo credits <br/>on Unsplash</h2>
                <ul>
                {photographers.map(photographer => (
                        <li>
                            <a className="tooltip" href={photographer[1]} target="_blank" rel="noreferrer">
                                {photographer[0]}<span className="tooltiptext">
                                {photographer[2].map(photo => (
                                    <img className="thumbnail"
                                         src={`/img/${photo}.png`}
                                         alt='food' />
                                ))}
                            </span>
                            </a>
                        </li>
                    )
                )}
                </ul>
            </div>
        )
    }

    const ContentArea = styled.div`
      background-color: #d6d6de;
    `;

    const Game = styled.div`
      display: grid;
      grid-template-columns: repeat(8, 100px);
      margin: 50px;
    `;



    const restart = () => {};
    return (
        <PermamentFeatures overview={false} sideContent={sideContent()}>
            <ContentArea>
                <Game>
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
                </Game>
            </ContentArea>
            </PermamentFeatures>
    );
}