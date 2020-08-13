import React from 'react';
import './card-list.styles.scss';
import CardItemComponent from "../card-item/card.component";
import InfiniteScroll from 'react-infinite-scroll-component';
import {ORDERS} from "./card-list.constants";

class CardListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: ORDERS}
    }

    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                orders: this.state.orders.concat(ORDERS)
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
                            <CardItemComponent key={index} order={order}></CardItemComponent>
                        ))
                    }
                </div>
            </InfiniteScroll>
        )
    }
}

export default CardListComponent;
