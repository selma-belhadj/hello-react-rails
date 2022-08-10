const GET_GREETING = 'helloRailsReact/greetings/GET_GREETING';

const greetingFetched = (text) => ({
  type: GET_GREETING,
  payload: {
    text,
  },
});

export const getGreeting = () => (dispatch) => {
  const URL = '/v1/greetings';
  fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      dispatch(greetingFetched(res.data));
    })
    .catch((error) => console.log(error));
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_GREETING:
      return action.payload.text;
    default:
      return state;
  }
}