import React from "react"; 

export function PhotoViewer(props) {
    return (
        <div>
            <h1>React Photo Viewer</h1>
            <img src={props.url} alt="An image of view" />
        </div>
    );
}