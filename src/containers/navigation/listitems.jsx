import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link, Route} from 'react-router-dom';
import AddCircle from '@material-ui/icons/AddCircle'

export const mainListItems = (
    <div>
        <Link to={'/centers'}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Stock Centers"/>
            </ListItem>
        </Link>
        <Link to={'/orders'}>
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon/>
                </ListItemIcon>
                <ListItemText primary="Orders"/>
            </ListItem>
        </Link>
        <Link to={'/add'}>
            <ListItem button>
                <ListItemIcon>
                    <AddCircle/>
                </ListItemIcon>
                <ListItemText primary="Add Inventory Items"/>
            </ListItem>
        </Link>
        <Link to={'/managers'}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Managers"/>
            </ListItem>
        </Link>
        <Link to={'/delivery'}>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText primary="Delivery Support"/>
            </ListItem>
        </Link>
        <Link to={'/analytics'}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon/>
                </ListItemIcon>
                <ListItemText primary="Analytics"/>
            </ListItem>
        </Link>
        <Link to={'/hotlines'}>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Hotlines"/>
            </ListItem>
        </Link>
    </div>
);
