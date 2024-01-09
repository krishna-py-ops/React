import RestaurantCard from "./RestaurentCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import jsonData from "../utils/constants";

const Body = () => {
    const [listofRestaurents,setresList] = useState([]);
    const [filterRestaurent, setfilterRestaurent] = useState([]);
    const [searchText, setsearchText] = useState("");
    // use effect callback function will be called after the rendering
    useEffect(()=>{

        getRestaurants();
    },[]);

    async function getRestaurants() {
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json);
        setresList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterRestaurent(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }catch(error){
            console.log("Some error has occured...");
        }
    }


    if(!listofRestaurents) return null;

    return(
        <div className="body"> 

            {/* Filter button div */}
            <div className = "filter">
                {/*Search button div */}
                <div className="search">
                    <input type = "text" className="search-box" value={searchText}
                    onChange={(e) =>{setsearchText(e.target.value);} }></input> {/* Changing the state variable*/ }

                    <button id = "searchBtn" onClick={() => {
                      const filterRestaurent =   listofRestaurents.filter((restaurent) => restaurent.info.name.toLowerCase().includes(searchText.toLowerCase()));
                      {/*Filtering if the names of the restaurants with the help of the name using includes function */}
                      setresList(filterRestaurent);
                    }}>Search</button>
                </div>
                <button id="filter-btn" onClick={() => {
                    const filtered_restaurent = listofRestaurents.filter((res) => res.info.avgRating > 4);
                    setresList(filtered_restaurent);
                }}>
                    Top Rated Restaurent
                </button>
            </div>
            {/* Container div */}
            <div className ="res-container">
            {
                listofRestaurents.map((restaurants) => ( <RestaurantCard key = {restaurants.info.id} resData = {restaurants}/>))
            }
            </div>
        </div>
    )
};

export default Body;