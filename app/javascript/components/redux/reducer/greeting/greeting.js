const GET_DATA = 'get_data'
const initialState = [];

const populateState = (payload) => ({
  type: GET_DATA,
  payload
});

export const getGreetings = () => (dispatch) => fetch(`api/v1/messages.json`)
  .then((response) => response.json())
  .then((data) => {
    dispatch(populateState(data));
  });

const reducer = ( state = initialState, action ) => {
  switch(action.type){
    case GET_DATA:
      return action.payload
    default:
      return state
  };
};

export default reducer;