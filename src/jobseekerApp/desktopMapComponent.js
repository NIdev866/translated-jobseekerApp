import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"
import _ from "lodash"

class MapComponent extends Component {
  render(){
    let mappedMarkers = []
    if(!this.props.routes){
      mappedMarkers = this.props.companies.map((venue, i) => {
        let marker = {
          position: {
            lat: venue.lat,
            lng: venue.lng
          }
        }
        return (
          <Marker 
            {...marker} 
          />
        )
      })
    }
    let mappedRoutes = []
    if(this.props.routes === {} || this.props.routes){
      mappedRoutes = this.props.routes.map((venue, i) => {
        return (
          <DirectionsRenderer directions={venue} />
        )
      })
    }
    return(
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
        onMarkerClick={_.noop}
        options={{streetViewControl: false, mapTypeControl: false, zoomControl: false, fullscreenControl: false}}>
        {mappedRoutes}        
        {this.props.companies && mappedMarkers}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(MapComponent)