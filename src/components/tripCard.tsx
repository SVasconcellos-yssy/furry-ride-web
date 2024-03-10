'use client'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField, Button, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

export default function TripCard() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                    Obter uma viagem
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="pickup-location"
                            label="Local da Recolha"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <LocationOnIcon sx={{ color: '#62C299' }} />,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="destination-location"
                            label="Local de Destino"
                            variant="outlined"
                            InputProps={{
                                startAdornment: <LocationOnIcon sx={{ color: '#62C299' }} />,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="for-me">Para Mim</InputLabel>
                            <Select
                                labelId="for-me"
                                id="for-me"
                                defaultValue=""
                                startAdornment={<PersonIcon sx={{ color: '#62C299' }} />}
                            >
                                <MenuItem value="">Selecione a opção</MenuItem>
                                <MenuItem value='Sim'>Sim</MenuItem>
                                <MenuItem value='Não'>Não</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="contained" sx={{ background: '#62C299', color: '#FFF', '&:hover': { background: '#58AF8A' } }}>
                            Procurar
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}