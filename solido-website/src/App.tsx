/**
 * App Component - Sólido Business Law
 * Diseño minimalista inspirado en Viralistic
 */

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Container, Typography, Button, IconButton } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Twitter } from '@mui/icons-material';
import solidoTheme from './styles/themes/solidoTheme';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import GlobalBackground from './components/layout/GlobalBackground';
import ScrollInteraction from './components/ui/ScrollInteraction';
import ScrollText from './components/ui/ScrollText';
import GlassCard from './components/ui/GlassCard';
import AnimatedCounter from './components/ui/AnimatedCounter';
import ParticleBackground from './components/ui/ParticleBackground';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={solidoTheme}>
      <CssBaseline />
      
      {/* Global Background */}
      <GlobalBackground />
      
      {/* Navigation */}
      <Navigation 
        items={[
          { label: 'HOME', href: '#home' },
          { label: 'QUIÉNES SOMOS', href: '#quienes-somos' },
          { label: 'INNOVACIÓN', href: '#innovacion' },
          { label: 'ÁREAS', href: '#areas' },
          { label: 'TALENTO', href: '#talento' },
          { label: 'CONTACTO', href: '#contacto' },
        ]}
      />

      {/* Hero Section */}
      <Box id="home">
        <Hero
          title="Donde Big Law se encuentra con Big Tech"
          subtitle="Sólido Business Law"
          description="Sólido no es una firma tradicional. Es el resultado de combinar el rigor de las grandes firmas globales con la precisión y la velocidad de la tecnología más avanzada."
          ctaText="Conoce nuestro enfoque"
          ctaHref="#quienes-somos"
        />
      </Box>

      {/* Quiénes Somos */}
      <Box id="quienes-somos" sx={{ 
        py: 6, 
        backgroundColor: '#1F2330',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        mt: 2,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Fondo de partículas */}
        <ParticleBackground 
          particleCount={40}
          speed={0.3}
          opacity={0.4}
          color="#B8C5B8"
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <ScrollInteraction animationType="slide" delay={0.2}>
              <ScrollText
                variant="h2"
                animationType="word"
                stagger={0.15}
                sx={{
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 600,
                  mb: 6,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                El derecho, reprogramado.
              </ScrollText>
            </ScrollInteraction>
            
            <ScrollInteraction animationType="fade" delay={0.8}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 400,
                  color: '#FFFFFF',
                  mb: 8,
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                  opacity: 0.9,
                }}
              >
                "No solo resolvemos problemas. Diseñamos cómo se soluciona el futuro."
              </Typography>
            </ScrollInteraction>

            <ScrollInteraction animationType="scale" delay={1.2}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  fontSize: '1.125rem',
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  fontWeight: 700,
                  borderColor: '#F46B06',
                  color: '#FFFFFF',
                  borderWidth: '2px',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#242C27',
                    borderWidth: '2px',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Conoce nuestro enfoque
              </Button>
            </ScrollInteraction>
          </Box>
        </Container>
      </Box>

      {/* Innovación */}
      <Box id="innovacion" sx={{ 
        py: 16, 
        backgroundColor: '#1F2330', 
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Fondo de partículas */}
        <ParticleBackground 
          particleCount={35}
          speed={0.4}
          opacity={0.35}
          color="#B8C5B8"
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <ScrollInteraction animationType="slide" delay={0.2}>
              <ScrollText
                variant="h2"
                animationType="word"
                stagger={0.1}
                sx={{
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 600,
                  mb: 6,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                IA, automation, data y precisión: la nueva práctica del derecho.
              </ScrollText>
            </ScrollInteraction>
            
            <ScrollInteraction animationType="fade" delay={0.8}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  color: '#FFFFFF',
                  mb: 6,
                }}
              >
                Nuestra IA no reemplaza abogados: los potencia.
              </Typography>
            </ScrollInteraction>

            <ScrollInteraction animationType="fade" delay={1.2}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.6,
                  mb: 8,
                  color: '#FFFFFF',
                  opacity: 0.9,
                }}
              >
                Les da más información, más capacidad de predicción y más tiempo para pensar estratégicamente. 
                Además, somos parte del Grupo LoBueno, un ecosistema latinoamericano de compañías innovadoras 
                y tecnológicas con impacto global.
              </Typography>
            </ScrollInteraction>

            {/* Estadísticas */}
            <ScrollInteraction animationType="scale" delay={1.6}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: 8,
                  mb: 12,
                  maxWidth: '1000px',
                  mx: 'auto',
                }}
              >
                <ScrollInteraction animationType="scale" delay={1.8}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '3rem', md: '4rem' },
                        fontWeight: 600,
                        color: '#FFFFFF',
                        lineHeight: 1,
                      }}
                    >
                      <AnimatedCounter 
                        end={95} 
                        duration={1.5} 
                        suffix="%" 
                        sx={{
                          fontSize: { xs: '4rem', md: '5rem' },
                          fontWeight: 600,
                          color: '#FFFFFF',
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                        }}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 500,
                        mt: 3,
                        fontSize: '1.125rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Precisión en análisis
                    </Typography>
                  </Box>
                </ScrollInteraction>
                
                <ScrollInteraction animationType="scale" delay={2.0}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '3rem', md: '4rem' },
                        fontWeight: 900,
                        color: '#FFFFFF',
                        lineHeight: 1,
                      }}
                    >
                      <AnimatedCounter 
                        end={70} 
                        duration={1.5} 
                        suffix="%" 
                        sx={{
                          fontSize: { xs: '4rem', md: '5rem' },
                          fontWeight: 600,
                          color: '#FFFFFF',
                          lineHeight: 1,
                          letterSpacing: '-0.02em',
                        }}
                      />
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 500,
                        mt: 3,
                        fontSize: '1.125rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Reducción de tiempo
                    </Typography>
                  </Box>
                </ScrollInteraction>
                
                <ScrollInteraction animationType="scale" delay={2.2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '3rem', md: '4rem' },
                        fontWeight: 900,
                        color: '#FFFFFF',
                        lineHeight: 1,
                      }}
                    >
                      24/7
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 500,
                        mt: 3,
                        fontSize: '1.125rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Disponibilidad
                    </Typography>
                  </Box>
                </ScrollInteraction>
              </Box>
            </ScrollInteraction>

            <ScrollInteraction animationType="scale" delay={2.4}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  fontSize: '1.125rem',
                  px: 6,
                  py: 2,
                  borderRadius: 0,
                  fontWeight: 700,
                  borderColor: '#F46B06',
                  color: '#ffffff',
                  borderWidth: '2px',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#242C27',
                    borderWidth: '2px',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Explora nuestra tecnología
              </Button>
            </ScrollInteraction>
          </Box>
        </Container>
      </Box>

      {/* Áreas de Práctica */}
      <Box id="areas" sx={{ py: 16, backgroundColor: '#242C27' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto', mb: 12 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 600,
                mb: 6,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              La estrategia legal que acelera los negocios.
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                color: '#FFFFFF',
                fontStyle: 'italic',
              }}
            >
              "Lo mejor del pensamiento jurídico. Con la velocidad del pensamiento tecnológico."
            </Typography>
          </Box>

          {/* Áreas Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 6,
              maxWidth: '1200px',
              mx: 'auto',
            }}
          >
            {[
              { 
                title: 'Corporate & Business Law', 
                desc: 'Estructuración corporativa, gobierno corporativo y asesoría estratégica empresarial.',
                features: ['Estructuración corporativa', 'Gobierno corporativo', 'Asesoría estratégica'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'M&A / Transacciones', 
                desc: 'Fusiones, adquisiciones y transacciones complejas con análisis de datos avanzado.',
                features: ['Due diligence automatizada', 'Análisis de riesgo', 'Estructuración de transacciones'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Minería y Energía', 
                desc: 'Regulación minera, energética y sostenibilidad con enfoque en innovación tecnológica.',
                features: ['Regulación minera', 'Energías renovables', 'Sostenibilidad'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Derecho Público', 
                desc: 'Asesoría en contratación pública, regulación y compliance gubernamental.',
                features: ['Contratación pública', 'Regulación', 'Compliance gubernamental'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Laboral y Seguridad Social', 
                desc: 'Derecho laboral moderno con herramientas de análisis predictivo.',
                features: ['Relaciones laborales', 'Seguridad social', 'Análisis predictivo'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Compliance', 
                desc: 'Programas de cumplimiento normativo automatizados y monitoreo en tiempo real.',
                features: ['Programas de cumplimiento', 'Monitoreo automatizado', 'Gestión de riesgos'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Propiedad Intelectual & Tecnología', 
                desc: 'Protección de IP, tecnología y innovación con herramientas de vanguardia.',
                features: ['Protección de IP', 'Tecnología', 'Innovación'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
            ].map((area, index) => (
              <GlassCard
                key={index}
                title={area.title}
                description={area.desc}
                features={area.features}
                ctaText={area.ctaText}
                ctaHref={area.ctaHref}
                delay={index * 0.1}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Talento */}
      <Box id="talento" sx={{ py: 30, backgroundColor: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '1000px', mx: 'auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 600,
                mb: 4,
                color: '#1F2330',
                lineHeight: 1.1,
              }}
            >
              Humanos brillantes. Tecnología brillante.
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                color: '#1F2330',
                mb: 6,
              }}
            >
              En Sólido no contratamos abogados para adaptarse al futuro. 
              Los formamos para construirlo.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                fontSize: '1.125rem',
                px: 6,
                py: 2,
                borderRadius: 0,
                fontWeight: 700,
                borderColor: '#77E077',
                color: '#1F2330',
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#1F2330',
                  borderWidth: '2px',
                },
              }}
            >
              Únete a nuestro equipo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contacto */}
      <Box id="contacto" sx={{ py: 26, backgroundColor: '#242C27', color: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: 600,
                mb: 6,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              El futuro legal está ocurriendo ahora.
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 400,
                color: '#FFFFFF',
                mb: 6,
                opacity: 0.9,
              }}
            >
              ¿Listo para poner a Sólido del lado de su empresa? 
              Hablemos de cómo transformar su estrategia legal en una ventaja competitiva.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              href="mailto:contacto@solidobusinesslaw.com"
              sx={{ 
                fontSize: '1.125rem',
                px: 6,
                py: 2,
                borderRadius: 0,
                fontWeight: 700,
                borderColor: '#F46B06',
                color: '#FFFFFF',
                borderWidth: '2px',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  transform: 'translateY(-2px)',
                  color: '#000000',
                  borderWidth: '2px',
                },
              }}
            >
              Hablemos de estrategia
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: '#1F2330', 
        borderTop: '1px solid rgba(184, 197, 184, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Fondo de partículas sutil */}
        <ParticleBackground 
          particleCount={20}
          speed={0.2}
          opacity={0.1}
          color="#B8C5B8"
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/logo_solido_blanco.png"
                alt="Sólido Business Law"
                sx={{
                  height: 50,
                  filter: 'brightness(1.2)',
                }}
              />
            </Box>

            {/* Texto central */}
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontSize: '1rem',
                  letterSpacing: '0.02em',
                }}
              >
                LegalTech Specialist - Grupo Lo Bueno
              </Typography>
            </Box>

            {/* Iconos de contacto */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-end' }
            }}>
              <IconButton
                href="mailto:contacto@solidobusinesslaw.com"
                sx={{
                  color: '#B8C5B8',
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(184, 197, 184, 0.1)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Email />
              </IconButton>
              
              <IconButton
                href="tel:+1234567890"
                sx={{
                  color: '#B8C5B8',
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(184, 197, 184, 0.1)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Phone />
              </IconButton>
              
              <IconButton
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#B8C5B8',
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(184, 197, 184, 0.1)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LocationOn />
              </IconButton>
              
              <IconButton
                href="https://linkedin.com/company/solido-business-law"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#B8C5B8',
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(184, 197, 184, 0.1)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn />
              </IconButton>
              
              <IconButton
                href="https://twitter.com/solidobusinesslaw"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#B8C5B8',
                  '&:hover': {
                    color: '#FFFFFF',
                    backgroundColor: 'rgba(184, 197, 184, 0.1)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;