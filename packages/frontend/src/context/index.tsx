import React, { createContext, useReducer, Dispatch } from 'react';

// Define the user interface
interface User {
  fullname: string;
  email: string;
  walletAddress: string;
  avatar: string;
}

// Define the user context type
interface UserContextType {
  user: User;
  updateUser: Dispatch<Partial<User>>;
}

// Define the initial state
const initialState: User = {
  fullname: '',
  email: '',
  walletAddress: '',
  avatar: ''
};

// Define the reducer action types
type UserAction = {
  type: 'UPDATE_USER';
  payload: Partial<User>;
};

// Define the reducer function
const userReducer = (state: User, action: UserAction): User => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Create the UserContext
export const UserContext = createContext<UserContextType>({
  user: initialState,
  updateUser: () => {}
});

// Create a UserContextProvider component
export const UserContextProvider: React.FC = ({ children  }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Function to update the user data
  const updateUser = (newUserData: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER', payload: newUserData });
  };

  // Provide the user data and update function to the children components
  return (
    <UserContext.Provider value={{ user: state, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
