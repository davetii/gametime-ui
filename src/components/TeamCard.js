import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import styles from './TeamCard.css';

const TeamCard = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Team Name
          </Typography>
          <div id="container">
            <div id="row">
                <div id="left">Conference:&nbsp;</div>
  	            <div id="right">Atlantic</div>
	        </div>
            <div id="row">
                <div id="left">Coach:</div>
  	            <div id="right">Coach name</div>
	        </div>
            <div id="row">
                <div id="left">GM:</div>
  	            <div id="right">GM name</div>
	        </div>
            <div id="row">
                <div id="left">Stadium:</div>
  	            <div id="right">Stadium name</div>
	        </div>
          </div>
        </CardContent>
      </Card>
    );

}
export default TeamCard;