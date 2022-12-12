import LoginFormView from './loginFormView'
import React from "react";
import SignUpFormView from './signUpFormView';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Utilities/firebaseConfig';

export default
function LoginSignUpFormPresenter(props){
    const [signUpStatus, setSignUpStatus] = React.useState();
    const [loginStatus, setLoginStatus] = React.useState();
    React.useEffect( componentWasCreatedACB, [] ); 
  
    function componentWasCreatedACB(){ 
      props.pageModel.addObserver(observerACB);
      function isTakenDownACB(){           
          props.pageModel.removeObserver(observerACB)
      }
     return isTakenDownACB;    
    }
  
    function observerACB() {
      setSignUpStatus(props.pageModel.signUpStatus);
      setLoginStatus(props.pageModel.loginStatus);
    }

    function onClose(){
      props.pageModel.setLoginStatus(false)
      props.pageModel.setSignUpStatus(false)
    }

    async function onSignUp(email, password){
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        props.pageModel.setSignUpStatus(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    async function onLogin(email, password){
      try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        props.pageModel.setLoginStatus(false)
      } catch (error) {
        console.log(error.message)
      }  
    }
    if(loginStatus)
    return (<div class="loginFormPresenter">
        <LoginFormView onClose={onClose} onSubmit={onLogin}/>
    </div>);

    if(signUpStatus)
    return (<div class="loginFormPresenter">
        <SignUpFormView onClose={onClose} onSubmit={onSignUp}/></div>);
}