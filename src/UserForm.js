import React from 'react';
import { Grid, Typography, Input, Box } from '@mui/material';

const UserForm = props => {
    return (
        <Box sx={{ position: 'relative', padding: '12px' }}>
        <Grid
            container
            spacing={2}
            sx={{ 
                backgroundColor: '#f5f5f5',
                marginBottom: '30px',
                display: 'block',
                padding: '8px 0'

            }}>
            <Grid item xs={12} >
                <Typography component={"h1"} sx={{ color: '#000000'}}>UserForm
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}>
                        ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{
                        width: '400px' }}
                        value={''}
                        onChange={e => {}}
                />

            </Grid>

            <Grid item xs={12} >
                <Typography component={"h1"} sx={{ color: '#000000'}}>UserForm
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                    component={'label'}
                    htmlFor="id"
                    sx={{
                        color: '#000000',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}>
                        Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{
                        width: '400px' }}
                        value={''}
                        onChange={e => {}}
                />

            </Grid>
            <button
            style={{
                margin: 'auto',
                marginBottom: '20px',
                backgroundColor: '#00c6e6',
                color: '#ffffff',
                marginLeft: '15px',
                marginTop: '20px'
            }}>
                Add
            </button>

        </Grid>
        </Box>
    );

}
export default UserForm;