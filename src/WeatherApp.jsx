import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        feels_like: 30.14,
        humidity: 25,
        temp: 31.82,
        temp_max: 31.82,
        temp_min: 31.82,
        weather: "clear sky",
        city:"Delhi"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </>
    )
}