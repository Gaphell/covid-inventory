import React from "react";
import {Card} from '@material-ui/core';
import './card.styles.scss';

const CardItemComponent = ({order: {name, contact, location, order_details}}) => {
    return (
        <Card className='card-item'>
            <p>name: {name}</p>
            <p>contact: {contact}</p>
            <p>location: {location}</p>
            {
                order_details?.map((item, index) => (
                    <p key={index}>{item.item_name}: {item.quantity}</p>
                ))
            }
        </Card>
    )
}

export default CardItemComponent;
