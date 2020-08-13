import React from 'react';
import './add-inventory-items.styles.scss';
import {InventoryItemConfig} from "./add-inventory-items.config";
import {FormGenerator} from "react-reactive-form";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";

class AddInventoryItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.inventoryForm.valid) {
            this.props.history.push('/home');
        } else {
            this.inventoryForm.markAsTouched();
        }
        console.log("Form values", this.inventoryForm.value);
    };

    handleReset = () => {
        this.loginForm.reset();
    };

    setForm = (form) => {
        this.inventoryForm = form;
        this.inventoryForm.meta = {
            handleReset: this.handleReset
        }
    };

    render() {
        return (
            <div>
                <form noValidate onSubmit={this.handleSubmit}>
                    <FormGenerator onMount={this.setForm} fieldConfig={InventoryItemConfig}/>
                    <IconButton aria-label="add" color="primary">
                        <AddCircleIcon/>
                    </IconButton>
                    <IconButton aria-label="delete" color="primary">
                        <DeleteIcon/>
                    </IconButton>
                    <Button
                        className="custom-button"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default AddInventoryItemComponent;
