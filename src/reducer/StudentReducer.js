import { CREATE_STUDENT } from "action/ActionTypes";

const initiaState = [];

export default function studentProducer(students = initiaState, action) {
    const {type, payload} = action;

    switch(action.type) {
        case CREATE_STUDENT:
            return [...students, action.payload];
        default:
            return students;
    }
}