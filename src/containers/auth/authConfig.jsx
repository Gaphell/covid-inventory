import { FormInput } from '../../shared/form-generator/formInput';
import {Validators} from "react-reactive-form";

export const SignInConfig = {
    controls: {
        email: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Email", type: "text"}
        },
        password: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Password", type: "password"}
        }
    }
};

export const DeliverySignupConfig = {
    controls: {
        name: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Name", type: "text"}
        },
        cid: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "CID No.", type: "text"}
        },
        contact: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Contact Number", type: "text"}
        },
        email: {
            options: {
                validators: Validators.email
            },
            render: FormInput,
            meta: {label: "Email", type: "email"}
        },
        password: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Password", type: "password"}
        },
        c_password: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Confirm Password", type: "password"}
        }
    }
};

export const ManagerSignUp = {
    controls: {
        name: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Name", type: "text"}
        },
        cid: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "CID No.", type: "text"}
        },
        contact: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Contact Number", type: "text"}
        },
        email: {
            options: {
                validators: Validators.email
            },
            render: FormInput,
            meta: {label: "Email", type: "email"}
        },
        password: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Password", type: "password"}
        },
        c_password: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Confirm Password", type: "password"}
        },
        secret_key: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Token", type: "text"}
        }
    }
};
