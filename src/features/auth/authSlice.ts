import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from '@testing-library/react';
import { User } from '../../models/user';

export interface LoginPayload {
  name: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },

    loginSuccess(state, action: PayloadAction<LoginPayload>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
      console.log('login user', action.payload);
      console.log('currentUser', state.currentUser);
    },

    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
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
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const selectCurrentUser = (state: any) => state.auth.currentUser;

//Reducer
const authReducer = authSlice.reducer;

export default authReducer;
