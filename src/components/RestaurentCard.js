const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines
    ,costForTwo,deliveryTime} = resData?.info;
    return (
        <div className="res-card">
            <img className ="res-logo"alt = "res-logo" 
            src ={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                cloudinaryImageId
                }
                />
            <div id= "res-card-content">
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>Rating⭐ : {avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;