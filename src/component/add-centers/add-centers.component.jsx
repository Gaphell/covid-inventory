import React from 'react';
import './add-centers.styles.scss';
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {FieldArray, FieldControl, FieldGroup, FormBuilder, Validators} from "react-reactive-form";
import Input from "@material-ui/core/Input";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function AddCentersComponent() {

    const retailerForm = FormBuilder.array([]);
    let keyCount = 0;

    const addItem = () => {
        retailerForm.push(createItem());
    }

    const createItem = () => {
        const control = FormBuilder.group({
            name: undefined,
            email: undefined,
            mobile: undefined,
            service_area_id: undefined,
            retailer_attributes: FormBuilder.group({
                name: undefined,
                location_attributes: FormBuilder.group({
                    longitude: undefined,
                    latitude: undefined
                })
            }),
        });
        control.meta = {
            key: getKey()
        };
        return control;
    }

    const getKey = () => {
        return keyCount++;
    };

    const handleSubmit = () => console.log(retailerForm.value);

    const removeItem = (index) => {
        retailerForm.removeAt(index);
    }

    return (
        <div>
            <IconButton aria-label="add" color="primary" onClick={addItem}>
                <AddCircleIcon/>
            </IconButton>
            <FieldArray
                control={retailerForm}
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
                                                name="email"
                                                render={({handler, touched, hasError}) => (
                                                    <div>
                                                        <label>Email: </label>
                                                        <Input {...handler()}/>
                                                        <span>{touched && hasError('required') && 'This field is required'}</span>
                                                    </div>
                                                )}/>
                                            <FieldControl
                                                name="mobile"
                                                render={({handler, touched, hasError}) => (
                                                    <div>
                                                        <label>Mobile#: </label>
                                                        <Input {...handler()}/>
                                                    </div>
                                                )}/>
                                            <FieldControl
                                                name="service_area_id"
                                                render={({handler, touched, hasError}) => (
                                                    <div>
                                                        <label>Service Area: </label>
                                                        {/*<Input {...handler()}/>*/}
                                                        <FormControl variant="outlined" className="width-15">
                                                            <InputLabel
                                                                id="demo-simple-select-outlined-label">Service
                                                                Area</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={1}
                                                                label="Service Area"
                                                                {...handler()}
                                                            >
                                                                <MenuItem value="">
                                                                    <em>None</em>
                                                                </MenuItem>
                                                                <MenuItem value={10}>Ten</MenuItem>
                                                                <MenuItem value={20}>Twenty</MenuItem>
                                                                <MenuItem value={30}>Thirty</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                )}/>
                                            <FieldGroup
                                                name="retailer_attributes"
                                                render={({handler, touched, hasError}) => (
                                                    <Container>
                                                        <FieldControl
                                                            name="name"
                                                            render={({handler, touched, hasError}) => (
                                                                <Container>
                                                                    <label>Retailer Name: </label>
                                                                    <Input {...handler()}/>
                                                                </Container>
                                                            )}/>
                                                        <FieldGroup
                                                            name="location_attributes"
                                                            render={() => (
                                                                <Container>
                                                                    <FieldControl
                                                                        name="longitude"
                                                                        render={({handler, touched, hasError}) => (
                                                                            <Container>
                                                                                <label>Longitude: </label>
                                                                                <Input {...handler()}/>
                                                                            </Container>
                                                                        )}
                                                                    />
                                                                    <FieldControl
                                                                        name="latitude"
                                                                        render={({handler, touched, hasError}) => (
                                                                            <Container>
                                                                                <label>Latitude: </label>
                                                                                <Input {...handler()}/>
                                                                            </Container>
                                                                        )}
                                                                    />
                                                                </Container>
                                                            )}/>
                                                    </Container>
                                                )}
                                            />
                                        </div>
                                    )}/>
                                <IconButton aria-label="delete" color="primary"
                                            onClick={() => removeItem(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>
                        )))
                }}/>
            <Button
                onClick={handleSubmit}
                className="custom-button"
                type="submit"
                variant="contained"
                color="primary">
                Invite
            </Button>
        </div>
    )
}
