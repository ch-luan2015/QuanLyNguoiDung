import { PayloadAction } from "@reduxjs/toolkit";
import { push } from 'connected-react-router';
import { call, delay, fork, take,put } from"redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";


function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000);

    localStorage.setItem('access_token', 'fake_token');

    //TODO: Sau khi dang nhap thanh cong thi dispatch 1 action tu middleware bang yield put()

    yield put(
      authActions.loginSuccess({
        id: 1,
        name: 'Luan',
      })
    );

    // redirect to admin page
    yield put(push('/admin'));
    
  } catch (error:any) {
    yield put(authActions.loginFailed(error.message));
  }
}


function* handleLogout() {
  yield delay(500);
  console.log("Handle Logout");
  localStorage.removeItem("access_token");
  //Redirect chuyen ve login page
}

function* watchLoginFlow(){
//? Nhu the nao da dang nhap roi , acces_token va expired time, phai chech them dieu kien

  while(true){
    const isLoggedIn = Boolean(localStorage.getItem('access_token')); //! Dong quan trong xem cnhuw the nao la dang nhap roi

    if(!isLoggedIn){ //! Neu chua dang nhap thi moi lang nghe login
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type) //Doi user dispatch 1 action la login thi thuc hien handle Login o duoi
      yield fork(handleLogin,action.payload) // Sau khi lang nghe no se dung doi logout
    
    }
   
    if(isLoggedIn){ //! Neu da dang nhap thi moi lang nghe log out
      yield take(authActions.logout.type) // Doi neu user co hanh dong logout , waiting
      yield call(handleLogout);//! Dung call khong dung fork vi sau khi logout roi no se chay tiep vao whilte , check van con token no se cho lang nghe logout tiep nua ma bo qua login 
      //! Muon no dung doi phai dung call thay fork, call la doi xong het cai lenh do roi moi chay
     //!Phai xoa het localstorage truoc khi thuc hien mot chu trinh moi 
    }

  }

}



export default function* authSaga() {
  //NEu dang nhap lang nghe logout , neu chua lang nghe login

 yield fork(watchLoginFlow);
 


}
