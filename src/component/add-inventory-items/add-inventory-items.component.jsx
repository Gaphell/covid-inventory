import React from 'react';
import './add-inventory-items.styles.scss';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import {FormBuilder, FieldArray, FieldGroup, FieldControl} from "react-reactive-form";
import Input from "@material-ui/core/Input";

class AddInventoryItemComponent extends React.Component {
    keyCount = 0;
    inventoryItemForm = FormBuilder.array([])

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form values", this.inventoryItemForm.value);
    };

    createItem = () => {
        const control = FormBuilder.group({
            name: undefined,
            quantity: undefined,
            description: undefined
        });
        control.meta = {
            key: this.getKey()
        };
        return control;
    }

    addItem = () => {
        this.inventoryItemForm.push(this.createItem());
    }

    removeItem = (index) => {
        this.inventoryItemForm.removeAt(index);
    }

    getKey = () => {
        return this.keyCount++;
    };

    render() {
        return (
            <div>
                <IconButton aria-label="add" color="primary" onClick={this.addItem}>
                    <AddCircleIcon/>
                </IconButton>
                <FieldArray
                    control={this.inventoryItemForm}
                    render={({controls}) => {
                        return (
                            controls.map((itemControl, index) => (
                                <div key={index}>
                                    <FieldGroup
                                        control={itemControl}
                                        render={() => (
                                            <div>
                                                <FieldControl
                                                    name="name"
                                                    render={({handler}) => (
                                                        <div>
                                                            <label>Name:</label>
                                                            <Input {...handler()}/>
                                                        </div>
                                                    )}/>
                                                <FieldControl
                                                    name="description"
                                                    render={({handler}) => (
                                                        <div>
                                                            <label>Description:</label>
                                                            <Input {...handler()}/>
                                                        </div>
                                                    )}/>
                                                <FieldControl
                                                    name="quantity"
                                                    render={({handler}) => (
                                                        <div>
                                                            <label>Quantity:</label>
                                                            <Input {...handler()}/>
                                                        </div>
                                                    )}/>
                                            </div>
                                        )}/>
                                    <IconButton aria-label="delete" color="primary"
                                                onClick={() => this.removeItem(index)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </div>
                            )))
                    }}/>
                <Button
                    className="custom-button"
                    type="submit"
                    variant="contained"
                    color="primary">
                    Submit
                </Button>
            </div>
        )
    }
}

export default AddInventoryItemComponent;
