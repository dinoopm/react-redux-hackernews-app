
const HackerNewsListReducer = (state = {
}, action) => {
    switch (action.type) {
        case "GET_TOP_STORIES_FULFILLED":
            state = {
            	...state,
                stories: action.payload
            };
            break;
    }
    return state;
};

export default HackerNewsListReducer;
