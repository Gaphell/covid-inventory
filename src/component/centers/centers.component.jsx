import React, {useEffect, useState} from 'react';
import './centers.styles.scss';
import {FormBuilder } from "react-reactive-form";
import Button from "@material-ui/core/Button";
import {Route, Switch} from 'react-router';
import CustomTable from "../../component/table/table";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCentersComponent from "../add-centers/add-centers.component";


export default function CentersComponent(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let keyCount = 0;
    let retailerForm = FormBuilder.group({});

    let create = false;

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
        create = true;
        // props.history.push('/centers/new');
    };

    const removeItem = (index) => {
        retailerForm.removeAt(index);
    };

    return (
        <div>
            <Dialog onClose={handleClose} open={open}>
                <DialogContent>
                    <AddCentersComponent/>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        className="custom-button"
                        type="submit"
                        variant="contained"
                        color="primary">
                        Cancel
                    </Button>
                    <Button
                        className="custom-button"
                        type="submit"
                        variant="contained"
                        color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <CustomTable parent={props}/>
            <Button
                onClick={handleClickOpen}
                className="custom-button"
                type="submit"
                variant="contained"
                color="primary">
                Create New Center
            </Button>
        </div>
    )
}
