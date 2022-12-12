import LoginFormView from './loginFormView'
import React from "react";
import SignUpFormView from './signUpFormView';

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

    if(loginStatus)
    return (<div class="loginFormPresenter">
      {signUpStatus.toString()}
        <LoginFormView onClose={onClose}/>
    </div>);

    if(signUpStatus)
    return (<div class="loginFormPresenter">
      {signUpStatus.toString()}
        <SignUpFormView onClose={onClose}/></div>);
}