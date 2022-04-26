import React, { useEffect, useState } from 'react'




const Temp = () => {
    const [city, setCity] = useState (null);
    const [search, setSearch] =useState ("pokhara");
      
    useEffect(() => {

       
        fetchApi();

        },[search])

        const fetchApi =async() =>{
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=61ce3538beca6c48042dd612fecb32a7`
            const response =await fetch (url);
            const resJson = await response.json();
              console.log(resJson);
            setCity(resJson.main);
           
            
        };
     
    return (
        <>
        <h1>Search For Todays Weather</h1>
<div className="Box">
    <div className="inputdata">
        <input type="search"
         value={search} 
         className="inputfield" 
         onChange={(Event)=>{ setSearch(Event.target.value)}}
        ></input>
        

    </div>
    {!city? (
        <p className="error-message">No data Found</p>
    ) : (
    <div>
    <div className="info">
    <h2 className="location">
    <i className="fas fa-search-location"></i>{search}
    </h2>
    <h1 className="temp">
    {city.temp}°cel 
    </h1>
    <h3 className="tempmin-max">mini :{city.temp_min}°cel | max : {city.temp_max }°cel</h3> 

</div>
<div className="wave-one"></div>
<div className="wave-two"></div>
<div className="wave-three"></div>
</div>)}

</div>

        </>
    )
}

    
export default Temp
