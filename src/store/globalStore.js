import {ObservableStore} from "@codewithdan/observable-store";

class GlobalStore extends ObservableStore {
    constructor() {
        super({ trackStateHistory: false });
    }

    setSnackbar(snackbarConfig) {
        this.setState({ snackbarConfig }, 'SET_CUSTOMER');
    }

}

export default new GlobalStore();