
export const TrialCircles = (props) => {

    const coloring = {
        0: "blank",
        1: "red",
        2: "green",
        3: "yellow",
        4: "blue",
        5: "turquoise",
        6: "violet"
    }

    const handleTry = (e) => {

    }

    return (
        <div className="blackBg">
            {props.turn ?
                ( <>
                <img className={props.focused === 0 ? "activeCircle" : ""} src={`/img/${coloring[props.toShow[0]]}.svg`} onClick={handleTry} alt="colored button"/>
                <img className={props.focused === 1 ? "activeCircle" : ""} src={`/img/${coloring[props.toShow[1]]}.svg`} onClick={handleTry} alt="colored button"/>
                <img className={props.focused === 2 ? "activeCircle" : ""} src={`/img/${coloring[props.toShow[2]]}.svg`} onClick={handleTry} alt="colored button"/>
                <img className={props.focused === 3 ? "activeCircle" : ""} src={`/img/${coloring[props.toShow[3]]}.svg`} onClick={handleTry} alt="colored button"/>
                </>)
                :
                (<>
                <img src={`/img/${coloring[props.toShow[0]]}.svg`} alt="colored button"/>
                <img src={`/img/${coloring[props.toShow[1]]}.svg`} alt="colored button"/>
                <img src={`/img/${coloring[props.toShow[2]]}.svg`} alt="colored button"/>
                <img src={`/img/${coloring[props.toShow[3]]}.svg`} alt="colored button"/>
                </>)
            }
        </div>
    )


}