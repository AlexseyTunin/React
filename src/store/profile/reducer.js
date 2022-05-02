import EXAMPLE_ACTION from './action';


const initialState = {
    showName: false,
    name: 'Alex'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case EXAMPLE_ACTION :
            return {
                ...state,
                showName: !state.showName
            };
        default:
             return state;   
    }
}

export default profileReducer;