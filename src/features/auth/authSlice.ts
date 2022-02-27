import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdminUser, User } from '../../models/user';

export interface LoginPayload {
  name: string;
  email: string;
}

export interface CurrentUser {
  name?: string;
  password?: string;
}
export interface AuthState {
  isLoggedIn: boolean;
  logging: boolean;
  currentUser?: CurrentUser;
  adminUser: AdminUser;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  adminUser: {
    name: 'luan',
    email: 'luan123@gmail.com',
    password: 'luan123',
    id: '0'
  }
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSucces(state, action: PayloadAction<CurrentUser>) {
      console.log('currentUser', action.payload);
      state.currentUser = action.payload;
      if (
        state.currentUser.name == initialState.adminUser.name &&
        state.currentUser.password == initialState.adminUser.password
      ) {
        state.logging = false;
        state.isLoggedIn = true;

        return localStorage.setItem('UserLogin', JSON.stringify(action.payload));
      } else {
        return console.log('not match');
      }
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    }
  }
});

//Actions
export const authActions = authSlice.actions;

//Selector
// export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
// export const selectIsLogging = (state: any) => state.auth.logging;

//Reducer
const authReducer = authSlice.reducer;

export default authReducer;
