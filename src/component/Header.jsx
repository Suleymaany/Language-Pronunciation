// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Language Pronunciation Practice
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
