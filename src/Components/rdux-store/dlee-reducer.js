const ADD_PUSH_DLEE = "ADD-PUSH-DLEE";
const ADD_DELL_DLEE = "ADD-DELL-DLEE";

let initalState = {
    dlee: []
};

const dleeReduxer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_PUSH_DLEE:
            if (state.dlee.indexOf(action.item) == -1) {
                state.dlee = state.dlee.concat([action.item]);
            } else {
                let obj = state.dlee.find(a => a.image === action.item.image);
                obj.count++;
            }
            return state;
        case ADD_DELL_DLEE:
            state.dlee.splice(action.index, 1);
            return state;
        default:
            return state;
    }
};
export const dleePushCreateAction = item => {
    return { type: ADD_PUSH_DLEE, item: item };
};
export const dleeDellCreateAction = index => {
    return { type: ADD_DELL_DLEE, index: index };
};
export default dleeReduxer;
