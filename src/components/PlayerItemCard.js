import { Card, CardContent, Divider, Typography } from '@mui/material';
import React from 'react';
import styles from './PlayerItemCard.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PlayerItemCard = () => {
    return (
        <Card sx={{ maxWidth: 275 }}>
        <CardContent class="centered">
          <Typography variant="h6" component="div">
            Player Name
          </Typography>
          <Divider />
          <div>Position</div>
          <AccountCircleIcon />
        </CardContent>
      </Card>
    );

}
export default PlayerItemCard;