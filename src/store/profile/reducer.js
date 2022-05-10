import EXAMPLE_ACTION, { UPDATE_NAME } from './action';


const initialState = {
    showName: true,
    name: 'Alex'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case EXAMPLE_ACTION :
            return {
                ...state,
                showName: !state.showName
            };

            case UPDATE_NAME:
                return {
                    ...state,
                    name: action.payload
                }
        default:
             return state;   
    }
}

export default profileReducer;