import React from 'react';
import './card-list.styles.scss';
import CardItemComponent from "../card-item/card.component";
import InfiniteScroll from 'react-infinite-scroll-component';

const orders = [
    {
        order_id: 1,
        name: 'Gaphel',
        contact: 77246416,
        location: 'babesa',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 2,
        name: 'Prakash',
        contact: 12345678,
        location: 'olakha',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 3,
        name: 'Tashi',
        contact: 87654321,
        location: 'changzamtog',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 4,
        name: 'Rinzin',
        contact: 99797687,
        location: 'Debsi',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 5,
        name: 'Rinzin',
        contact: 99797687,
        location: 'Debsi',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 6,
        name: 'Rinzin',
        contact: 99797687,
        location: 'Debsi',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 7,
        name: 'Rinzin',
        contact: 99797687,
        location: 'Debsi',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    },
    {
        order_id: 8,
        name: 'Rinzin',
        contact: 99797687,
        location: 'Debsi',
        order_details: [
            {item_name: 'rice', quantity: '25 kg'},
            {item_name: 'oil', quantity: '1 L'},
            {item_name: 'salt', quantity: '1 kg'}]
    }
];

class CardListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: orders}
    }

    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                orders: this.state.orders.concat(orders)
            })
        }, 1500);

    };

    render() {
        return (
            <InfiniteScroll
                dataLength={this.state.orders.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                <div className="card-list">
                    {
                        this.state.orders.map((order, index) => (
                            <CardItemComponent key={/*order.order_id*/index} order={order}></CardItemComponent>
                        ))
                    }
                </div>
            </InfiniteScroll>
        )
    }


}

export default CardListComponent;
