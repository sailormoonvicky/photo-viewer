import React from "react";
import { imageUrls } from "./imagesUrls";
import { useState } from 'react'

export function ImageSelector () {
    const [img, setImg] = useState('https://picsum.photos/id/124/1200/400.jpg');

    const imgsLists = imageUrls.map((url, index) => (
        <li key={index}>
            <button onClick={() => {setImg(url)}}>
                <img src={url} alt={`View image of index ${index}`} />
            </button>
        </li>
        ));


    return (
        <div>
            <h2>Select your photo</h2>
            <img src={img} alt="The selected view" />
            <ul>{imgsLists}</ul>
        </div>
    )

}