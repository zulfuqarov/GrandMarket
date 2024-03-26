import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import markers, { zoomLevel, containerStyle, center, FilterMarkers } from '../GoogleMap';
const env = import.meta.env


const BranchesMap = () => {

    const mapRef = useRef(null);

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [zoomMarker, setzoomMarker] = useState(null)

    const [Search, setSearch] = useState('')
    const HandleChangeSerach = (e) => {
        setSearch(e.target.value)
    }

    const { isLoaded } = useJsApiLoader({
        id: env.REACT_APP_GOOGLE_URL,
        googleMapsApiKey: env.REACT_APP_GOOGLE_API_KEY
    });
    const onLoad = React.useCallback(
        function callback(map) {
            mapRef.current = map;
            map.setCenter(center);
            map.setZoom(zoomLevel);
        },
        [center]
    );
    const onUnmount = React.useCallback(function callback(map) {
    }, []);
    const handleMarkerClick = (e, marker) => {
        if (e.domEvent) {
            setSelectedMarker(marker);
        } else {
            setzoomMarker(marker)
        }
    };


    useEffect(() => {
        if (zoomMarker && mapRef.current) {
            mapRef.current.panTo(zoomMarker.position);
            mapRef.current.setZoom(18);
        }
    }, [zoomMarker]);



    return (
        <section className='pt-[80px]'>

            {isLoaded ?
                <div className='relative max-[768px]:static'>
                    <div className='h-[100%]'>
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            {markers.map((marker, index) => (
                                <MarkerF
                                    key={index}
                                    position={marker.position}
                                    onClick={(e) => handleMarkerClick(e, marker)}
                                />
                            ))}
                            {selectedMarker && (
                                <InfoWindowF
                                    position={selectedMarker.position}
                                    onCloseClick={() => setSelectedMarker(null)}
                                >
                                    <ul className=' font-medium pt-[10px]'>
                                        <li className='pb-[7px] text-gray-500'><i className="fa-solid pr-[5px] text-blue-600 fa-g"></i>{selectedMarker.content.title}</li>
                                        <li className='pb-[7px] text-gray-500'><i className="fa-solid pr-[5px] text-blue-600 fa-phone"></i>{selectedMarker.content.tel}</li>
                                        <li className='pb-[7px] text-gray-500'><i className="fa-solid pr-[5px] text-blue-600 fa-g"></i>{selectedMarker.content.street}</li>
                                        <li className='pb-[7px] text-gray-500'><i className="fa-regular pr-[5px] text-blue-600 fa-clock"></i>{selectedMarker.content.open}</li>
                                    </ul>
                                </InfoWindowF>
                            )}
                        </GoogleMap>
                    </div>
                    <div className='overflow-y-auto pb-[20px] w-[450px] h-[700px] max-[768px]:mt-[60px] max-[768px]:w-full max-[768px]:left-0 max-[768px]:static  flex flex-col  items-center bg-white absolute top-[10%] left-[2%] rounded-xl'>
                        {/* map Search Input start */}
                        <div className="mb-3 pt-[20px] md:w-96">
                            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                <input
                                    onChange={HandleChangeSerach}
                                    value={Search}
                                    type="search"
                                    className="relative m-0 -mr-0.5 block max-[768px]:w-full  flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon1" />
                            </div>
                        </div>
                        {/* map Search Input end */}

                        {
                            FilterMarkers(Search).length > 0 ? 
                                (
                                    FilterMarkers(Search).map((oneMarker, index) => (
                                        <button key={index} onClick={(e) => handleMarkerClick(e, oneMarker)} className='w-[95%] text-left mt-[30px]'>
                                            <div className=' border-solid px-[10px] py-[10px] border-[1px] border-gray-400 rounded-xl'>
                                                <div>
                                                    <p className='font-bold text-blue-600'>{oneMarker.content.title}</p>
                                                </div>
                                                <div>
                                                    <ul className=' font-medium pt-[10px]'>
                                                        <li className='pb-[7px] text-gray-500'><i className="fa-solid pr-[5px] text-blue-600 fa-g"></i> super</li>
                                                        <li className='pb-[7px] text-gray-500'><i className="fa-solid pr-[5px] text-blue-600 fa-phone"></i>{oneMarker.content.tel}</li>
                                                        <li className='pb-[7px] text-gray-500'><i className="fa-solid pr-[5px] text-blue-600 fa-g"></i>{oneMarker.content.street}</li>
                                                        <li className='pb-[7px] text-gray-500'><i className="fa-regular pr-[5px] text-blue-600 fa-clock"></i>{oneMarker.content.open}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </button>
                                    ))
                                ) : <h1>Tapilmadi</h1>
                        }

                    </div>
                </div>
                :
                <div className='flex flex-row justify-center items-center w-full h-full'>
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                </div>
            }

        </section >
    );
};

export default BranchesMap;



