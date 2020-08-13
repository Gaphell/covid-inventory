import React from "react";
import {Card} from '@material-ui/core';
import './card.styles.scss';

const items = [
    {item_name: 'rice', quantity: '25 kg'},
    {item_name: 'oil', quantity: '1 L'},
    {item_name: 'salt', quantity: '1 kg'}
];
const CardItemComponent = (order_details) => (
    <Card className='card-item'>
        <p>name: Gaphel</p>
        <p>contact: 77246416</p>
        <p>location: Babesa</p>
        {
            order_details.map(item => (
                <div>
                    <p>{item.item_name}: {item.quantity}</p>
                </div>
            ))
        }
    </Card>
)

export default CardItemComponent;
