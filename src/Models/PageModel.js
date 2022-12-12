class PageModel{
    constructor(){
        this.observers = [];
        this.signUpStatus = false;
        this.loginStatus = false;
    }

    addObserver(obs){
        this.observers = [...this.observers, obs];
    }

    removeObserver(obsToRemove){
        function sameObsCB(obs){
            if(obs.name !== obsToRemove.name){
                return true;
            }
        }
        this.observers = this.observers.filter(sameObsCB)
    }
    setSignUpStatus(status){
        if(this.signUpStatus !== status){
            this.signUpStatus = status;
            if(status === true) this.setLoginStatus(false)
            this.notifyObservers({signUpStatus: status, loginStatus: false});
        }
    }
    setLoginStatus(status){
        if(this.loginStatus !== status){
            this.loginStatus = status;
            if(status === true) this.setSignUpStatus(false);
            this.notifyObservers({loginStatus: status, signUpStatus: false});
        }
    }
    
    notifyObservers(payload){
        function invokeObserverACB(obs){ obs(payload); }    
        try{this.observers.forEach(invokeObserverACB)}catch(err){console.log(err)}
    }
}
export default PageModel;