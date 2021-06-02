import React, { useState } from 'react'
// import Leaflet from 'leaflet'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import { Container, SeeLocation, Content } from './styles'
import Ripple from '../../../Ripple'
import { FaArrowRight } from 'react-icons/fa'
import { theme } from 'twin.macro'
import { lighten } from 'polished'
import MarkerIcon from '../../../../../public/images/marker.svg'
// import 'leaflet/dist/leaflet.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from 'next/image'
const Map = () => {
    // const iconMarker = Leaflet.icon({
    //     iconUrl: markerIcon,
    //     iconSize: [58, 68],
    //     iconAnchor: [29, 68],
    //     popupAnchor: [130, 2]
    // })
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: -23.4698073,
        longitude: -46.6550099,
        zoom: 18
    })
    return (
        <Container>
            <Content>
                <ReactMapGL
                    {...viewport}
                    latitude={-23.4698073}
                    longitude={-46.6550099}
                    width="100%"
                    doubleClickZoom
                    mapboxApiAccessToken={process.env.MAP_BOX_TOKEN}
                    mapStyle={'mapbox://styles/mapbox/streets-v11'}
                    height="100%"
                    dragPan
                    dragRotate
                    onViewportChange={nextViewport => setViewport(nextViewport)}
                >
                    <NavigationControl
                        style={{
                            left: 10,
                            top: 10
                        }}
                    />
                    <Marker longitude={-46.6550099} latitude={-23.4698073}>
                        <div tw={'w-10'}>
                            <Image
                                objectFit="cover"
                                width={504}
                                height={704}
                                src="/images/marker.png"
                                alt="marcador"
                            />
                        </div>
                    </Marker>
                </ReactMapGL>
                {/* <MapContainer
                    center={[-23.4698073, -46.6550099]}
                    zoom={75}
                    style={{ width: '100%', height: '100%' }}
                >
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAP_BOX_TOKEN}`}
                    />
                    <Marker
                        icon={iconMarker}
                        position={[-23.469708535735183, -46.65490873410962]}
                    />
                </MapContainer> */}
            </Content>
            <SeeLocation>
                <Ripple color={lighten(0.2, theme`colors.orange.500`)}>
                    <p>Veja a rota mais proxima</p>
                    <button type="button">
                        <Ripple color={lighten(0.2, theme`colors.orange.500`)}>
                            <span>
                                <FaArrowRight />
                            </span>
                        </Ripple>
                    </button>
                </Ripple>
            </SeeLocation>
        </Container>
    )
}

export default Map
