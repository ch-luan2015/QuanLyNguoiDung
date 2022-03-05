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
  isAuthenticated: boolean;
  loading: boolean;
  user?: CurrentUser;
}

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  user: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.loading = true;
    }, 

    loginSucces(state, action: PayloadAction<CurrentUser>) {
      console.log('login user', action.payload);
      state.user = action.payload;
      state.loading = false;
      state.isAuthenticated = true;
    },

   
    logout(state) {
      state.user = undefined;
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
