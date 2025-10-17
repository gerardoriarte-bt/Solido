/**
 * Navigation Component - Sólido Business Law
 * Diseño minimalista inspirado en Viralistic
 */

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { scrollToSection } from '../../utils/scrollUtils';

interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      scrollToSection(sectionId, 80);
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
        <Box
          component="img"
          src="/logo_solido_negro.png"
          alt="Sólido Business Law"
          sx={{
            height: 40,
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection('home', 0)}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#000000' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {items.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            sx={{
              cursor: 'pointer',
              py: 2,
              px: 3,
              borderRadius: 1,
              mb: 1,
              '&:hover': {
                backgroundColor: '#F8F8F8',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  color: '#000000',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box
            component="img"
            src="/logo_solido_negro.png"
            alt="Sólido Business Law"
            sx={{
              height: 45,
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.8,
              },
            }}
            onClick={() => scrollToSection('home', 0)}
          />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {items.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: '#000000',
                  fontWeight: 500,
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  px: 3,
                  py: 1,
                  borderRadius: 0,
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      backgroundColor: '#000000',
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: 'none' },
              color: '#000000',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#FFFFFF',
            borderLeft: '1px solid rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;