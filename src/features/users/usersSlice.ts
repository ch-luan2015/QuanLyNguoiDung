import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';

//initialState
const initialState = {
  usersInitial: [
    {
      id: '1',
      name: 'Robert Schwartz',
      email: 'rob23@gmail.com'
    },
    {
      id: '2',
      name: 'Lucy Ballmer',
      email: 'lucyb56@gmail.com'
    },
    {
      id: '3',
      name: 'Anna Smith',
      email: 'annasmith23@gmail.com'
    },
    {
      id: '4',
      name: 'Robert Brown',
      email: 'bobbrown432@yahoo.com'
    },
    {
      id: '5',
      name: 'Roger Bacon',
      email: 'rogerbacon12@yahoo.com'
    }
  ]
};
//create store

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.usersInitial.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<String>) => {
      state.usersInitial = state.usersInitial.filter((user) => action.payload !== user.id);
    },
    editUser: (state, action: PayloadAction<User>) => {
      let userUpdate = action.payload;
      state.usersInitial.map((user) => {
        if (user.id === userUpdate.id) {
          user.name = userUpdate.name;
          user.email = userUpdate.email;
        }
      });
    }
  }
});
//actions

export const usersActions = usersSlice.actions;
//selector
//reducer

const usersReducer = usersSlice.reducer;
export default usersReducer;
