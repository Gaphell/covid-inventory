import React from 'react';
import './card-list.styles.scss';
import CardItemComponent from "../card-item/card.component";

const orders = [
    {
        order_id: 1,
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 2,
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 3,
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },

]
const CardListComponent = (props) => (
    <div className="card-list">
        {
            orders.map(order => (
                <CardItemComponent key={order.order_id} order={order.order_details}></CardItemComponent>
            ))
        }
    </div>
)

export default CardListComponent;
