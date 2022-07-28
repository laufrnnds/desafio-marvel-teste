import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        paddingTop: '20px',
        paddingBottom: '20px',
        color: 'white',
        minHeight: '40px',
        width: '100vw',
        textAlign: 'center',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>Criado por Laura Fernandes</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
