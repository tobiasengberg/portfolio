import {NavLink} from "react-router-dom";

export const PermamentFeatures = ({children, setId}) => {
    return (
        <div id="sitebase">
            <div id="sidebar">
                <h1>Things Made</h1>
                <p className="uppercase">By Tobias Engberg</p>
                <NavLink to={-1}>Return</NavLink>
            </div>
            <div id={setId}>
                {children}
            </div>
        </div>
    )
}