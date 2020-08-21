import React, {useEffect, useState} from 'react';
import './add-centers.styles.scss';
import {FieldControl, FieldGroup, FormBuilder, Validators} from "react-reactive-form";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from "../../service/api.service";
import noop from "../../shared/noop/noop";
import Location from "../../shared/map/map";
import Grid from "@material-ui/core/Grid";


export default function AddCentersComponent(props) {
    let retailerForm = FormBuilder.group({});
    const [service_areas, setArea] = useState([])

    useEffect(() => {
        // serviceArea();
        setForm(user);
    }, []);

    const serviceArea = () => {
        API('GET', 'service_areas').subscribe(response => {
            setArea(response.data.service_areas);
        })
    }

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
    };

    const setForm = (user) => {
        // for edit
        // retailerForm.patchValue(user);
    };

    const goToCenters = () => {
        props.history.push('/centers');
    };

    const handleSubmit = () => {
        if (retailerForm.valid) {
            console.log({valid: retailerForm.value})
        }
        console.log({invalid: retailerForm.value})
    };

    return (
        <div className="p-20">
            <Grid container>
                <Grid item md={6} sm={12}>
                    <FieldGroup
                        control={retailerForm}
                        render={() => (
                            <div className="row">
                                <FieldControl
                                    name="name"
                                    options={{validators: Validators.required}}
                                    render={({handler, touched, hasError}) => (
                                        <div className="form-group">
                                            <label>Name: </label>
                                            <Input className="form-field" disableUnderline={true} {...handler()}/>
                                            <span className="focus-border"><i></i></span>
                                            <span
                                                className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                        </div>
                                    )}/>
                                <FieldControl
                                    options={{validators: Validators.required}}
                                    name="email"
                                    render={({handler, touched, hasError}) => (
                                        <div className="form-group">
                                            <label>Email: </label>
                                            <Input className="form-field" disableUnderline={true} {...handler()}/>
                                            <span className="focus-border"><i></i></span>
                                            <span className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                        </div>
                                    )}/>
                                <FieldControl
                                    options={{validators: Validators.required}}
                                    name="mobile"
                                    render={({handler, touched, hasError}) => (
                                        <div className="form-group">
                                            <label>Phone Number: </label>
                                            <Input className="form-field" disableUnderline={true} {...handler()}/>
                                            <span className="focus-border"><i></i></span>
                                            <span className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                        </div>
                                    )}/>
                                    <div className="form-group">
                                <FieldControl
                                    name="service_area_id"
                                    render={({handler, touched, hasError}) => (
                                        <div>
                                            <p>Service Area: </p>
                                            {/*<Input {...handler()}/>*/}
                                            <FormControl>
                                                <InputLabel
                                                    id="demo-simple-select-outlined-label"> </InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined form-field"
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
                                                <span className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                            </FormControl>
                                        </div>
                                    )}/>
                                    </div>
                                <FieldGroup
                                    name="retailer_attributes"
                                    render={({handler, touched, hasError}) => (
                                        <div>
                                            <FieldControl
                                                name="name"
                                                options={{validators: Validators.required}}
                                                render={({handler, touched, hasError}) => (
                                                    <div className="form-group">
                                                        <label>Retailer Name: </label>
                                                        <Input className="form-field"
                                                               disableUnderline={true} {...handler()}/>
                                                        <span className="focus-border"><i></i></span>
                                                        <span className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                                    </div>
                                                )}/>
                                            <FieldGroup
                                                name="location_attributes"
                                                render={() => (
                                                    <div>
                                                        <FieldControl
                                                            name="longitude"
                                                            render={({handler, touched, hasError}) => (
                                                                <div className="form-group">
                                                                    <label>Longitude: </label>
                                                                    <Input className="form-field"
                                                                           disableUnderline={true} {...handler()}/>
                                                                    <span className="focus-border"><i></i></span>
                                                                    <span className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                                                </div>
                                                            )}
                                                        />
                                                        <FieldControl
                                                            name="latitude"
                                                            render={({handler, touched, hasError}) => (
                                                                <div className="form-group">
                                                                    <label>Latitude: </label>
                                                                    <Input className="form-field"
                                                                           disableUnderline={true} {...handler()}/>
                                                                    <span className="focus-border"><i></i></span>
                                                                    <span className="warn-color">{touched && hasError('required') && 'This field is required'}</span>
                                                                </div>
                                                            )}
                                                        />
                                                    </div>
                                                )}/>
                                        </div>
                                    )}
                                />

                            </div>
                        )}/>
                </Grid>
                <Grid item md={6} sm={12}>
                    <Location/>
                </Grid>
            </Grid>
            <Button
                onClick={handleSubmit}
                className="custom-button"
                type="submit"
                variant="contained"
                color="primary">
                Invite
            </Button>
            <Button
                onClick={goToCenters}
                className="custom-button"
                type="submit"
                variant="contained"
                color="primary">
                Go to Centers
            </Button>
        </div>
    )
}
