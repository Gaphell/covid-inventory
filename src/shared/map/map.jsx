import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Location extends Component {
    static defaultProps = {
        center: {
            lat: 27.4288601,
            lng: 89.6532514
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAcV1BjXK8AwiO8dheFqsOs3eWdBEwSR5o' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={27.4288601}
                        lng={89.6532514}
                        text="Cassie Homes"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Location;