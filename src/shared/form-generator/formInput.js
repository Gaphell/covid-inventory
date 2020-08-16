import {FormHelperText, OutlinedInput} from "@material-ui/core";
import React from "react";

export const FormInput = ({ handler, touched, hasError, meta }) => (
    <div>
        <OutlinedInput label={meta.label} type={meta.type} placeholder={`${meta.label}`} {...handler()}/>
        <FormHelperText error={true} children={touched
        && hasError("required")
        && `${meta.label} is required`}/>
        <FormHelperText error={true} children={touched
        && hasError("email")
        && `Invalid Email`}/>
    </div>
);
