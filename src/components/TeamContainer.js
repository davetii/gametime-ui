import React from 'react';
import Box from '@mui/material/Box';
import TeamHeader from './TeamHeader';
import './TeamContainer.css'
import PlayerItemCard from './PlayerItemCard';


const TeamContainer = () => {
    return (
     <div class="container">
        <TeamHeader />
        <div class="grid">
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
            <div><PlayerItemCard /></div>
        </div>
      </div>
    );

}
export default TeamContainer;