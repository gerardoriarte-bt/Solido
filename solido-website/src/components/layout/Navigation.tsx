/**
 * Navigation Component - Sólido Business Law
 * Diseño minimalista inspirado en Viralistic
 */

import React, { useState, useEffect } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <Box sx={{ width: 320, backgroundColor: '#1F2330', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4, borderBottom: '1px solid rgba(184, 197, 184, 0.1)' }}>
        <Box
          component="img"
          src="/logo_solido_blanco.png"
          alt="Sólido Business Law"
          sx={{
            height: 45,
            cursor: 'pointer',
            filter: 'brightness(1.1)',
          }}
          onClick={() => scrollToSection('home', 0)}
        />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 3, pt: 4 }}>
        {items.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            sx={{
              cursor: 'pointer',
              py: 2.5,
              px: 3,
              borderRadius: 0,
              mb: 0.5,
              borderLeft: '2px solid transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(184, 197, 184, 0.05)',
                borderLeftColor: '#B8C5B8',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 400,
                  fontSize: '0.95rem',
                  letterSpacing: '0.05em',
                  color: '#FFFFFF',
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
          backgroundColor: scrolled 
            ? 'rgba(31, 35, 48, 0.7)' 
            : 'rgba(31, 35, 48, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: '#FFFFFF',
          boxShadow: scrolled 
            ? '0 2px 20px rgba(0, 0, 0, 0.15)' 
            : '0 4px 30px rgba(0, 0, 0, 0.3)',
          borderBottom: '1px solid rgba(184, 197, 184, 0.08)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1.5, px: { xs: 2, md: 6 } }}>
          {/* Logo */}
          <Box
            component="img"
            src="/logo_solido_blanco.png"
            alt="Sólido Business Law"
            sx={{
              height: { xs: 36, md: 42 },
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              filter: 'brightness(1.1)',
              opacity: scrolled ? 0.9 : 1,
              '&:hover': {
                opacity: 0.8,
                transform: 'scale(1.05)',
              },
            }}
            onClick={() => scrollToSection('home', 0)}
          />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {items.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 400,
                  textTransform: 'none',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  px: 2,
                  py: 1,
                  borderRadius: 0,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  opacity: scrolled ? 0.85 : 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: '1.5px',
                    backgroundColor: '#B8C5B8',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#B8C5B8',
                    opacity: 1,
                    '&::before': {
                      width: '50%',
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
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: 'rgba(184, 197, 184, 0.1)',
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
            width: 320,
            backgroundColor: '#1F2330',
            borderLeft: '1px solid rgba(184, 197, 184, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;