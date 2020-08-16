import React, {useEffect, useState} from 'react';
import './centers.styles.scss';
import {FormBuilder } from "react-reactive-form";
import Button from "@material-ui/core/Button";
import {Route, Switch} from 'react-router';
import CustomTable from "../../component/table/table";
import AddCentersComponent from "../add-centers/add-centers.component";


export default function CentersComponent(props) {
    let keyCount = 0;
    let retailerForm = FormBuilder.group({});

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
    };

    const setForm = (user) => {
        // for edit
        // retailerForm.patchValue(user);
    };

    const handleSubmit = () => {
        props.history.push('/centers/new');
    };

    const removeItem = (index) => {
        retailerForm.removeAt(index);
    };

    return (
        <div>
            <CustomTable parent={props}/>
            <Button
                onClick={handleSubmit}
                className="custom-button"
                type="submit"
                variant="contained"
                color="primary">
                Create New Center
            </Button>
        </div>
    )
}
