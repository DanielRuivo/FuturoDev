import React from 'react';
import { AppBar, Toolbar, Container, Paper, Box, Typography } from '@mui/material';
import ThemeToggleButton from '../atoms/ThemeToggleButton';
import styles from './StoreLayout.module.css';

type StoreLayoutProps = {
  children: React.ReactNode;
};

const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AppBar position="static" color="primary" elevation={0} className={styles.header}>
        <Toolbar>
          <div className={styles.logoContainer}>
            <Typography variant="h5" component="h1" className={styles.logo}>
              PlantStore
            </Typography>
          </div>
          <ThemeToggleButton />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className={styles.mainContent}>
        <Paper elevation={2} className={styles.contentPaper}>
          {children}
        </Paper>
      </Container>

      <Paper component="footer" square elevation={3} className={styles.footer}>
        <Container maxWidth="lg">
          <Box py={3} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} PlantStore - Seu e-commerce de plantas de jardim
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  );
};

export default StoreLayout;
