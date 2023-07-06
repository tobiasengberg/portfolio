
export const FeedbackCircles = ({toShow}) => {

    return (
        <div className="blackBgRight">
            <img src={`#/portfolio/img/${toShow[0]}.svg`} className={toShow[0] !== "blank" ? "filled" : ""} alt="red button"/>
            <img src={`#/portfolio/img/${toShow[1]}.svg`} className={toShow[1] !== "blank" ? "filled" : ""} alt="red button"/>
            <img src={`#/portfolio/img/${toShow[2]}.svg`} className={toShow[2] !== "blank" ? "filled" : ""} alt="red button"/>
            <img src={`#/portfolio/img/${toShow[3]}.svg`} className={toShow[3] !== "blank" ? "filled" : ""} alt="red button"/>
        </div>
    )


}