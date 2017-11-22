import axios from 'axios';

export function getNewsList() {
    return {
        type: "GET_TOP_STORIES",
        payload: new Promise((resolve, reject) => {
            let url = "http://localhost:3000/getStories/topstories";
            axios.get(url).then(function(response){
                console.log(response.data);
                resolve(response.data);
            });  
        })
    };
}
