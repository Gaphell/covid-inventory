import React, {useEffect, useState} from 'react';
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
import API from "../../service/api.service";


export default function AddCentersComponent() {
    let keyCount = 0;
    let retailerForm = FormBuilder.group({});
    const [service_areas, setArea] = useState([])
    // const addItem = () => {
    //     retailerForm.push(createItem());
    // }

    useEffect(() => {
        setForm(user);
    });

    const user = {
        email: 'ps@gmail.com',
        role: 'admin',
        name: 'Eminem',
        mobile: '+97517828758',
        service_area_id: 1,
        retailer_attributes: {
            name: 'Joint Task Force',
            location_attributes: {
                longitude: 123,
                latitude: 121
            }
        }
    }

    const setForm = (user) => {
        // for edit
        // retailerForm.patchValue(user);
    }

    const handleSubmit = () => {
        if (retailerForm.valid) {
            console.log({valid: retailerForm.value})
        }
        console.log({invalid: retailerForm.value})
    };

    const removeItem = (index) => {
        retailerForm.removeAt(index);
    }

    return (
        <div>
            {/*<IconButton aria-label="add" color="primary" onClick={addItem}>*/}
            {/*    <AddCircleIcon/>*/}
            {/*</IconButton>*/}
            {/*<FieldArray*/}
            {/*    control={retailerForm}*/}
            {/*    render={({controls}) => {*/}
            {/*        return (*/}
            {/*            controls.map((itemControl, index) => (*/}
            {/*                <div>*/}
            <FieldGroup
                control={retailerForm}
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
                            options={{validators: Validators.required}}
                            name="mobile"
                            render={({handler, touched, hasError}) => (
                                <div>
                                    <label>Mobile#: </label>
                                    <Input {...handler()}/>
                                    <span>{touched && hasError('required') && 'This field is required'}</span>
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
                                            label="Service Area"
                                            {...handler()}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {/*{*/}
                                            {/*    service_areas?.map(({id, name}) => (*/}
                                            {/*        <MenuItem value={id}>{name}</MenuItem>*/}
                                            {/*    ))*/}
                                            {/*}*/}
                                        </Select>
                                        <span>{touched && hasError('required') && 'This field is required'}</span>
                                    </FormControl>
                                </div>
                            )}/>
                        <FieldGroup
                            name="retailer_attributes"
                            render={({handler, touched, hasError}) => (
                                <Container>
                                    <FieldControl
                                        name="name"
                                        options={{validators: Validators.required}}
                                        render={({handler, touched, hasError}) => (
                                            <Container>
                                                <label>Retailer Name: </label>
                                                <Input {...handler()}/>
                                                <span>{touched && hasError('required') && 'This field is required'}</span>
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
                                                            <span>{touched && hasError('required') && 'This field is required'}</span>
                                                        </Container>
                                                    )}
                                                />
                                                <FieldControl
                                                    name="latitude"
                                                    render={({handler, touched, hasError}) => (
                                                        <Container>
                                                            <label>Latitude: </label>
                                                            <Input {...handler()}/>
                                                            <span>{touched && hasError('required') && 'This field is required'}</span>
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
            {/*<IconButton aria-label="delete" color="primary"*/}
            {/*            onClick={() => removeItem(index)}>*/}
            {/*    <DeleteIcon/>*/}
            {/*</IconButton>*/}
            {/*</div>*/}
            {/*)))*/}
            {/*}}/>*/}
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
