import { FormInput } from '../../shared/form-generator/formInput';
import {Validators} from "react-reactive-form";

export const InventoryItemConfig = {
    controls: {
        name: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Name", type: "text"}
        },
        quantity: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Quantity", type: "number"}
        },
        description: {
            options: {
                validators: Validators.required
            },
            render: FormInput,
            meta: {label: "Description", type: "text"}
        }
    }
};

export default InventoryItemConfig;
