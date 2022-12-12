import React from "react";

function SignUpFormView(props){
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    function onClose(){
        props.onClose()
    }
    function onSubmit(){
        props.onSubmit(email, password)
    }
    return(
        <div class="form-popup">
            <div class="form-container">    
                <h1>Sign up</h1>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" onChange={(event)=>{setEmail(event.target.value)}} required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" onChange={(event)=>{setPassword(event.target.value)}} required/>
                <button type="submit" class="btn"  onClick={onSubmit}>Login</button>
                <button type="button" class="btn cancel" onClick={onClose}>Close</button>
            </div>
        </div>);
}
export default SignUpFormView;