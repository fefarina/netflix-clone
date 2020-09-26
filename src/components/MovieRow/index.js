import React, { useState } from 'react';
import NavigateBefore from '@material-ui/icons/NavigateBefore'
import NavigateNext from '@material-ui/icons/NavigateNext'
import './MovieRow.css'
import { Height } from '@material-ui/icons';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + 250;
        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {

    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBefore style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--rigth" onClick={handleRightArrow}>
                <NavigateNext style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}