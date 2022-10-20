// eslint-disable-next-line
import React, {useEffect, useState} from "react";
import { CssBaseline, Grid } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'


import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import {getPlacesData} from './api/travel'

const App = () => {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState(null)
    // const [childClicked, setChildClicked] = useState(null)


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}})=>{
            setCoordinates({lat : latitude, lng:longitude});
        })
    },[])

    console.log(coordinates, bounds);

    useEffect(() => {
        getPlacesData(bounds)
            .then((data)=>{
                console.log(data);
                setPlaces(data);
            });
           
    }, [coordinates, bounds])
    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width : '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={places}
                        // childClicked={childClicked}    
                    />
                </Grid>
                <Grid item xs={12}  md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        // setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;