import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const Hot_URL=import.meta.env.VITE_HOT_URL;
    const COLD_URL=import.meta.env.VITE_COLD_URL;
    const RAINY_URL=import.meta.env.VITE_RAINY_URL;

    return (
        <div className="InfoBox">
            
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>=80?RAINY_URL:(info.temp>15?Hot_URL:COLD_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                        <p>{info.city }{info.humidity>=80?<ThunderstormIcon></ThunderstormIcon>:(info.temp>15?<SunnyIcon></SunnyIcon>:<AcUnitIcon></AcUnitIcon>)}</p>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            
                            <p>Temperature : {info.temp}&deg;C</p>
                            <p>Humididty : {info.humidity}</p>
                            <p>Maximum Temperature : {info.temp_max}&deg;C</p>
                            <p>Minimum Temperature : {info.temp_min}&deg;C</p>
                            <p>Weather can be described as <b><i>{info.weather}</i> </b> and feels like : {info.feels_like}&deg;C</p>
                        </Typography>
                    </CardContent>
                
                </Card>
            </div>
            
        </div>

    )
}