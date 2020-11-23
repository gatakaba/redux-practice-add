const initialState = {
  count: 0,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case "ADD": {
      return { count: state.count + 1 };
    }
    default:
      return state;
  }
}
