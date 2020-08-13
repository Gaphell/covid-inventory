
import { FormInput } from '../../shared/form-generator/formInput';
import {Validators} from "react-reactive-form";

export const SignInConfig = {
    controls: {
        username: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Username", type: "text"}
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