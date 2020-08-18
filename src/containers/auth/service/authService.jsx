class AuthService {
    static login = (token) => {
        localStorage.setItem('token', token);
    }

    static setUser = (user) => {
        localStorage.setItem('user', user);
    }

    static removeUser = () => {
        localStorage.removeItem('user');
    }

    static get isAuthenticated() {
        return !!localStorage.getItem('token');
    }

    static get token() {
        return localStorage.getItem('token');
    }

    static logout() {
        localStorage.removeItem('token');
    }
}

export default AuthService
