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

const ConferenceCard = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Eastern Conference
          </Typography>
          <List>
            <ListItem alignItems="flex-start">
                <ListItemText primary="Atlanta Ravens" />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemText primary="New York Fastbacks" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
};

export default ConferenceCard;
