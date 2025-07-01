import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Paper } from '@mui/material';
import { LocalFlorist } from '@mui/icons-material';
import { ThemeToggle } from '../../atoms';
import styles from './StoreLayout.module.css';

interface StoreLayoutProps {
  children: ReactNode;
}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AppBar position="sticky" className={styles.header}>
        <Toolbar>
          <div className={styles.logoContainer}>
            <LocalFlorist className={styles.logoIcon} />
            <Typography variant="h6" component="h1" className={styles.logoText}>
              PlantaShop
            </Typography>
          </div>
          <div className={styles.headerActions}>
            <ThemeToggle />
          </div>
        </Toolbar>
      </AppBar>

      <main className={styles.main}>
        <Container maxWidth="lg">
          <Paper elevation={0} className={styles.contentPaper}>
            {children}
          </Paper>
        </Container>
      </main>

      <footer className={styles.footer}>
        <Paper elevation={0} className={styles.footerPaper}>
          <Container maxWidth="lg">
            <Box py={3} textAlign="center">
              <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} PlantaShop - Todos os direitos reservados
              </Typography>
              <Typography variant="body2" color="textSecondary" className={styles.footerText}>
                Desenvolvido com ♥ para amantes de plantas
              </Typography>
            </Box>
          </Container>
        </Paper>
      </footer>
    </div>
  );
};

