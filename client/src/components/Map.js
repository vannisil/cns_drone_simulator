import React from "react"
import { GoogleMap, Marker } from "react-google-maps"

function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 41.117142, lng: 16.871872 }}
        
      >
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            //key={park.properties.PARK_ID}
            name={'BARI'}
            position={{
              lat: 41.117142,
              lng: 16.871872
            }}
            // icon={{
            //   url: `/skateboarding.svg`,
            //   scaledSize: new window.google.maps.Size(25, 25)
            // }}
          />
      </GoogleMap>
    );
  }

export default Map;