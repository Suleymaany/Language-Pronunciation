// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => (
  <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
    <Toolbar>
      <Typography variant="body1" color="inherit">
        © 2024 Language Practice App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Footer;
