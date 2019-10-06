const ADD_PUSH_SAS = "ADD-PUSH-SAS";
const ADD_PUSH_NULL = "ADD-PUSH-SAS";

let initalState = {
    sas: ""
};

const sasReduxer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_PUSH_SAS:
            state.sas = action.text;
            return state;
        default:
            return state;
    }
};

export const sasChangeCreateAction = text => {
    return { type: ADD_PUSH_SAS, text: text };
};
export const sasNullCreateAction = text => {
    return { type: ADD_PUSH_NULL, text: text };
};

export default sasReduxer;
