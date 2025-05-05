import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}) {
    const sampleImg = "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
    const weatherImages = {
        "clear sky": "https://images.unsplash.com/photo-1623846736569-1d90cba76d65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww",
        "few clouds": "https://images.unsplash.com/photo-1742098987950-02fa9b8230e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZldyUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D",
        "scattered clouds": "https://images.unsplash.com/photo-1499346030926-9a72daac6c63",
        "broken clouds": "https://images.unsplash.com/photo-1684180448316-fb4a07a87078?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyb2tlbiUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D",
        "overcast clouds": "https://images.unsplash.com/photo-1719958805412-046289afa93e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D",
        "light rain": "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlnaHQlMjByYWlufGVufDB8fDB8fHww",
        "moderate rain": "https://images.unsplash.com/photo-1685731840342-893fdd8074e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJhdGUlMjByYWlufGVufDB8fDB8fHww",
        "heavy intensity rain": "https://images.unsplash.com/photo-1434118489318-42a0e62c6235?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "thunderstorm": "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bmRlcnN0b3JtfGVufDB8fDB8fHww",
        "snow": "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNub3d8ZW58MHx8MHx8fDA%3D",
        "fog": "https://images.unsplash.com/photo-1543968996-ee822b8176ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D",
        "mist": "https://plus.unsplash.com/premium_photo-1669802766544-40eba66c4fa0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlzdHxlbnwwfHwwfHx8MA%3D%3D",
        "haze": "https://images.unsplash.com/photo-1530809783266-c54e7919f95d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D",
        "smoke": "https://images.unsplash.com/photo-1609609014985-bfd695dad544?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtb2tlfGVufDB8fDB8fHww"
    };
    
    const imageUrl = weatherImages[info.weather] || sampleImg;

    return(

        <div className='w-full h-[80%] flex items-start justify-center flex-col gap-8 text-[1.25vw] text-[#d3d3d3]'>
            <div className='flex items-center justify-between w-full'>
                <p>Temperature :</p>
                <p>{info.temp}&deg;c</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>Minimum Temperature :</p>
                <p>{info.tempMin}&deg;c</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>Maximum Temperature :</p>
                <p>{info.tempMax}&deg;c</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>Humidity: </p>
                <p>{info.humidity}%</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>Right now its feel's like</p>
                {/* <p><i>{info.feelsLike}</i></p> */}
                <p>{info.feelsLike}&deg;c</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>Its a</p>
                {/* <p>{info.weather}</p> */}
                <p>{info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}</p>

            </div>

            {/* <p>Temperature : {info.temp}&deg;c</p>
            <p>Minimum Temperature : {info.tempMin}&deg;c</p>
            <p>Maximum Temperature : {info.tempMax}&deg;c</p>
            <p>Humidity: {info.humidity}</p>
            <p>Right now its feel's like <i>{info.feelsLike}</i></p>
            <p>Its {info.weather}</p> */}
        </div>

        // <Card sx={{ maxWidth: 345 }} style={{marginTop:"1rem"}}>
        //     <CardActionArea>
        //         <CardMedia
        //         component="img"
        //         height="140"
        //         image={
        //             // info.humidity > 80 ? rainUrl : info.temp > 20 ? hotUrl : coldUrl
        //             imageUrl
        //         }
        //         alt="green iguana"
        //         />
        //         <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //             {info.city}
        //         </Typography>
        //         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
        //             <p>Temperature : {info.temp}&deg;c</p>
        //             <p>Minimum Temperature : {info.tempMin}&deg;c</p>
        //             <p>Maximum Temperature : {info.tempMax}&deg;c</p>
        //             <p>Humidity: {info.humidity}</p>
        //             <p>Right now its feel's like <i>{info.feelsLike} and its {info.weather}</i></p>
        //         </Typography>
        //         </CardContent>
        //     </CardActionArea>
        // </Card>
    )
}