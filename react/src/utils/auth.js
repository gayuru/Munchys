class Auth{
    constructor(){
        this.authenticated = false;
    }

    login(cb){
        this.authenticated = true;
        localStorage.setItem('isAuth', this.authenticated);
        cb();
    }

    logout(cb){
        localStorage.removeItem('isAuth');
        this.authenticated = false;
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new Auth();