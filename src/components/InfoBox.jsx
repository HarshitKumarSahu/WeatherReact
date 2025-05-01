import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// useState

export default function InfoBox() {
    const sampleImg = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let info = {
        city: "Bilaspur",
        temp: 42,
        tempMin: 26,
        tempMax: 46,
        humidity: 47,
        feelsLike: 43.85,
        weather: "haze",
    }

    return(
        <Card sx={{ maxWidth: 345 }} style={{marginTop:"1rem"}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={sampleImg}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                    <p>Temperature : {info.temp}&deg;c</p>
                    <p>Minimum Temperature : {info.tempMin}&deg;c</p>
                    <p>Maximum Temperature : {info.tempMax}&deg;c</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Right now its feel's like <i>{info.feelsLike} and its {info.weather}</i></p>
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}