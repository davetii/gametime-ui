import React from 'react';
import TeamCard from './TeamCard';
import styles from './TeamHeader.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const TeamHeader = () => {
    return (
        <Box class="box-thing">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TeamCard />
          </Grid>
          <Grid item xs={4}>
          <div class="flex-child">
                I am the team icon
            </div>
          </Grid>
        </Grid>
      </Box>
    );

}
export default TeamHeader;