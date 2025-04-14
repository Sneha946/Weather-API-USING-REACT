import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const  API_URL=import.meta.env.VITE_API_URL;
    const API_KEY=import.meta.env.VITE_API_KEY;

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            let result={
                temp:jsonResponse.main.temp,
                humidity:jsonResponse.main.humidity,
                temp_max:jsonResponse.main.temp_max,
                temp_min:jsonResponse.main.temp_min,
                feels_like:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
                city:jsonResponse.name
            };
            console.log(jsonResponse);
            return result;
        }
        catch(e){
            throw(err);
        }
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(e){
            setError(true);
        }
    }
    return (
        <div className='SearchBox'>
            <h1>Search For the Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" 
                    label="City Name" 
                    variant="outlined" 
                    required
                    value={city}
                    name="city"
                    onChange={handleChange}
                />
                <br></br><br></br>
                <Button 
                    variant="contained" 
                    size="large"
                    type="submit">Search
                </Button>
                {error &&<p style={{color:"red"}}>No such place exists</p>}
            </form>
        
        </div>
    )
}