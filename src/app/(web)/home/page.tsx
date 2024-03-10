'use client'
import React from 'react';
import { Box, Grid, Button, TextField, Container } from '@mui/material';
import DrawerComponent from "../../../components/drawer";
import TripCard from '../../../components/tripCard';
import Map from "../../../components/map";

export default function Home() {
    const [origin, setOrigin] = React.useState('');
    const [destination, setDestination] = React.useState('');

    const handleRequestTrip = () => {
        console.log('Viagem solicitada de', origin, 'para', destination);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <DrawerComponent />
            <Container sx={{ py: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <TripCard />
                    </Grid>
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12}>
                        <Box mt={4}>
                            <Map apiKey={process.env.GOOGLE_API_KEY} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
