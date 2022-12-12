function SignUpFormView(props){
    function onClose(){
        props.onClose()
    }
    return(
        <div class="form-popup">
            <form class="form-container">    
                <h1>Sign up</h1>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required/>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <button type="submit" class="btn">Login</button>
                <button type="button" class="btn cancel" onClick={onClose}>Close</button>
            </form>
        </div>);
}
export default SignUpFormView;