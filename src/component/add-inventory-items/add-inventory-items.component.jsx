import React from 'react';
import './add-inventory-items.styles.scss';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import {FormBuilder, FieldArray, FieldGroup, FieldControl, Validators} from "react-reactive-form";
import Input from "@material-ui/core/Input";

class AddInventoryItemComponent extends React.Component {
    keyCount = 0;
    inventoryItemForm = FormBuilder.array([])

    constructor(props) {
        super(props);
        this.state = {formItems: false};
    }

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

    getKey = () => {
        return this.keyCount++;
    };

    setFormItems = () => this.setState({formItems: !!this.inventoryItemForm.controls.length});

    addItem = () => {
        this.inventoryItemForm.push(this.createItem());
        this.setFormItems();
    }

    handleSubmit = () => console.log(this.inventoryItemForm.value);

    removeItem = (index) => {
        this.inventoryItemForm.removeAt(index);
        this.setFormItems();
    }

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
                                <div key={`${itemControl.meta.key}-${String(index)}`}>
                                    <FieldGroup
                                        control={itemControl}
                                        render={() => (
                                            <div>
                                                <FieldControl
                                                    name="name"
                                                    options={{validators: Validators.required}}
                                                    render={({handler, touched, hasError}) => (
                                                        <div>
                                                            <label>Name: </label>
                                                            <Input {...handler()}/>
                                                            <span>{touched && hasError('required') && 'This field is required'}</span>
                                                        </div>
                                                    )}/>
                                                <FieldControl
                                                    options={{validators: Validators.required}}
                                                    name="quantity"
                                                    render={({handler, touched, hasError}) => (
                                                        <div>
                                                            <label>Quantity: </label>
                                                            <Input {...handler()}/>
                                                            <span>{touched && hasError('required') && 'This field is required'}</span>
                                                        </div>
                                                    )}/>
                                                <FieldControl
                                                    name="description"
                                                    render={({handler, touched, hasError}) => (
                                                        <div>
                                                            <label>Description: </label>
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
                    onClick={this.handleSubmit}
                    disabled={!this.state.formItems}
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
