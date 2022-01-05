import React, { useState } from 'react'

const Filter = () => {
    const [range, setRange] = useState("")
    return (
        <div>
            <div className="navbar">
                <h2 className="navbar-heading">
                    Filter by
                </h2>
                <div className="select">
                    <select>
                        <option selected>Collection</option>
                        <option>Saab</option>
                        <option>VW</option>
                        <option>Audi</option>
                    </select>
                </div>
                <div className="select">
                    <select>
                        <option selected>Collection</option>
                        <option>Saab</option>
                        <option>VW</option>
                        <option>Audi</option>
                    </select>
                </div>
                <div className="select">
                    <select>
                        <option selected>Collection</option>
                        <option>Saab</option>
                        <option>VW</option>
                        <option>Audi</option>
                    </select>
                </div>
                <div className="select">
                    <select>
                        <option selected>Collection</option>
                        <option>Saab</option>
                        <option>VW</option>
                        <option>Audi</option>
                    </select>
                </div>
                <div className="range">
                    <h2 className="range-heading">Price Range: ${range}</h2>
                    <input type="range" min="0" max="100000" onChange={(e) => setRange(e.target.value)} />
                    <div className="range-price">
                        <span>$0</span>
                        <span>$10.000</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter
