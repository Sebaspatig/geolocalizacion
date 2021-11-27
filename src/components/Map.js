import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const Map = (props) =>{
    return (
        <GoogleMap 
            defaultZoom={10}
            defaultCenter={{lat:6.156059, lng:-75.5858773}}
        >
            <Marker 
                position={{lat: 6.156059,lng:-75.5858773}}
            />
        </GoogleMap>
    )
}

export default withScriptjs( withGoogleMap(Map))
