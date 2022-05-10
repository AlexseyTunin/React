const EXAMPLE_ACTION = "EXAMPLE_ACTION";
export const UPDATE_NAME = "UPDATE_NAME"

export const exampleAction = {
    type: EXAMPLE_ACTION
}

export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name
})

export default EXAMPLE_ACTION;