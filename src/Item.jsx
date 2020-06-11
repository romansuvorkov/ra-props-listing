import React from 'react';

export default function Item(props) {
    
    const {item} = props;
    console.log(item.title);
    let stockLvl;
    if (item.quantity < 11) {
        stockLvl = 'low';
    } else if (item.quantity > 11 && item.quantity < 21) {
        stockLvl = 'medium';
    } else if (item.quantity > 20) {
        stockLvl = 'hight';
    }
    let isGlobalCur = false;
    let currSymbol;
    if (item.currency_code === 'USD') {
        isGlobalCur = true;
        currSymbol = '$';
    } else if (item.currency_code === 'EUR') {
        isGlobalCur = true;
        currSymbol = '€';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage && item.MainImage.url_570xN} alt="Item" />
                </a>
            </div>
            <div className="item-details">
            <p className="item-title">{item.title && item.title.length > 50 ? item.title.slice(0, 50) + '…' : item.title}</p>
            <p className="item-price">{isGlobalCur ? `${currSymbol}${Number(item.price).toFixed(2)}` : `${Number(item.price).toFixed(2)} ${item.currency_code}`}</p>
            <p className={`item-quantity level-${stockLvl}`}>{item.quantity} left</p>
            </div>
        </div>
    );

}