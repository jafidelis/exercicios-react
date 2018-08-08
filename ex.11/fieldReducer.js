const initialState = { value: 'Opa' };

export default function(state = initialState, action) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            return { value: action.payload };
        default: 
            return state;
    }
}