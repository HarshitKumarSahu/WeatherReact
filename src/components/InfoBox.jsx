export default function InfoBox({info}) {
    return(

        <div className='w-full h-[80%] flex items-start justify-center flex-col gap-8 sm:text-[1.25vw] text-[5vw] sm:text-[#d3d3d3] text-[#1f1f1f]'>
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
                <p>{info.feelsLike}&deg;c</p>
            </div>
            <div className='flex items-center justify-between w-full'>
                <p>Its a</p>
                <p>{info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}</p>

            </div>
        </div>
    )
}