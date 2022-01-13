const isUserLoginReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
};

export default isUserLoginReducer;
