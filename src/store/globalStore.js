import {ObservableStore} from "@codewithdan/observable-store";

class GlobalStore extends ObservableStore {
    constructor() {
        super({ trackStateHistory: false });
    }

    setSnackbar(snackbarConfig) {
        this.setState({ snackbarConfig }, 'SET_CUSTOMER');
    }

    setAuth(auth) {
        this.setState({ auth }, 'SET_AUTH');
    }
}

export default new GlobalStore();
