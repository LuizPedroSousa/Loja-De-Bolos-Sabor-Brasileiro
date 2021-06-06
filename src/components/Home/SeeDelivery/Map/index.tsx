import React, { useRef, useState } from 'react'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import { Container, SeeLocation, Content } from './styles'
import { FaArrowRight } from 'react-icons/fa'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from 'next/image'
import useCustomRipple from '../../../../hooks/useCustomRipple'
const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: -23.4698073,
        longitude: -46.6550099,
        zoom: 18
    })
    const arrowButtonRef = useRef<HTMLButtonElement>(null)

    useCustomRipple([{ ref: arrowButtonRef }])

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
                        <div className="w-10">
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
            </Content>
            <SeeLocation>
                <p>Veja a rota mais proxima</p>
                <button type="button" ref={arrowButtonRef}>
                    <span>
                        <FaArrowRight />
                    </span>
                </button>
            </SeeLocation>
        </Container>
    )
}

export default Map
