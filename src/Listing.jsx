import React from 'react';
import Item from './Item';

export default function Listing(props) {
    const {items} = props;

    return (
        <div className="item-list">
            {items.map((o) => <Item item={o} key={o.listing_id} />)}
        </div>
    );

}