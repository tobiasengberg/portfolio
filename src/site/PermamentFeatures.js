import {NavLink} from "react-router-dom";

export const PermamentFeatures = ({children, setId, overview, sideContent}) => {
    return (
        <div id="sitebase">
            <div id="sidebar">
                <div>
                    <h1>Stuff Made</h1>
                    <p className="uppercase">By Tobias Engberg</p>
                </div>
                <div>
                    {overview ? undefined : <NavLink to={"/"} className="link right">&larr; Back to overview</NavLink>}
                </div>
                <div>
                    {sideContent}
                </div>
            </div>
            {children}

        </div>
    )
}