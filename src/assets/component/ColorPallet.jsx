import React, { useCallback, useState } from "react";
import "./ColorPallet.css"

export default function ColorPallet() {

    const [currentColor, setCurrentColor] = useState("none");
    const colors = [
        { name: 'Red', value: '#FF0000' },
        { name: 'Cyan', value: '#00FFFF' },
        { name: 'Magenta', value: '#FF00FF' },
        { name: 'Black', value: '#000000' },
        { name: 'White', value: '#FFFFFF' },
        { name: 'Gray', value: '#808080' },
        { name: 'Orange', value: '#FFA500' },
        { name: 'Purple', value: '#800080' },
        { name: 'Pink', value: '#FFC0CB' },
        { name: 'Brown', value: '#A52A2A' },
        { name: 'Teal', value: '#008080' },
        { name: 'Lime', value: '#00FF00' },
    ];

    const handleDivClick = useCallback((colorName) => {
        setCurrentColor(colorName);
    }, [])

    return (
        <>
            <div className="container">
                {colors.map((color) => (
                    <div
                        key={color.name}
                        style={{ background: color.value, color }}
                        onClick={() => handleDivClick(color.name)}
                    >
                        {color.name}
                    </div>
                ))}
            </div>
            <div style={{textAlign: "center"}}>
                <h2>
                    Your have currently selected color 
                </h2>
                <h1>{currentColor}</h1>
            </div>
        </>
    )
};  
