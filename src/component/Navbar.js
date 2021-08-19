import React, {useEffect, useState} from 'react';
//import './component/Navbar.css';

const Navbar = () => {

    const [city,setCity] = useState(null)
    const [search, setSearch] = useState("pune")

     useEffect( () => {
        const fetchApi = async () => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9634433ec62514eac0cedac3a57149c2`
            const response = await fetch(url)
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
         fetchApi();

     },[search] )

    return(
        <>
       <div className='box'>
           <div className="inputData">
               <input
               type="search"
               value={search}
               className="inputField"
               onChange={ (event) => { setSearch(event.target.value) }}
               />
           </div>
           {!city ? (
               <p>NO Data Found</p>
           ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i> {search}
            </h2>
            <h1 className="temp">
             {city.temp} Cel
            </h1>
            <h3 className="tempmin_max"> Min :{city.temp_min} Cel | Max : {city.temp_max} Cel </h3>
        </div>
        </div>
           )}
           

       </div>
    </>
    );
};
export default Navbar;