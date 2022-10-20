import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async (bounds) => {
    try{
        const {data : {data}} = await axios.get(URL, {
            params: {
                bl_latitude: bounds.sw.lat,
                tr_latitude: bounds.ne.lat,
                bl_longitude: bounds.sw.lng,
                tr_longitude: bounds.ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '05aadaaa9fmshe72ec98a1467c9ap1a3656jsn52b64a4fae59',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch(error){
        console.log(error);
    }
}

// export default getPlacesData;