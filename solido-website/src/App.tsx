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
          title="El futuro del derecho es hoy."
          subtitle="Soluciones sólidas, tecnología y visión estratégica."
          description="Sólido nace bajo un principio simple: el derecho debe generar soluciones, no obstáculos. El modelo legal tradicional se quedó atrás; sus tiempos no son los de los negocios modernos y sus respuestas ya no alcanzan para resolver los retos de hoy. Un modelo legal moderno que combina el mejor talento legal con tecnología, datos e inteligencia artificial. No somos espectadores del cambio, somos arquitectos. Integramos Legal Tech para ofrecer más calidad en menos tiempo."
          ctaText="Conoce nuestro enfoque"
          ctaHref="#quienes-somos"
        />
      </Box>

      {/* Quiénes Somos */}
      <Box id="quienes-somos" sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: '#1F2330',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Imagen de fondo fragmentada con transición suave */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '60%',
            height: '120%',
            backgroundImage: 'url(/bosque-fondo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15,
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, #1F2330 0%, rgba(31, 35, 48, 0.95) 25%, rgba(31, 35, 48, 0.7) 40%, transparent 60%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-20%',
              left: 0,
              right: 0,
              height: '20%',
              background: 'linear-gradient(180deg, transparent 0%, #1F2330 100%)',
            },
          }}
        />
        {/* Línea divisoria con verde */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.4), transparent)',
            zIndex: 1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
            <ScrollInteraction animationType="slide" delay={0.2}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#B8C5B8',
                  mb: 3,
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  display: 'block',
                }}
              >
                Filosofía
              </Typography>
              <ScrollText
                variant="h2"
                animationType="word"
                stagger={0.15}
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  mb: 4,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  textAlign: 'left',
                }}
              >
                El Saber Hacer
              </ScrollText>
            </ScrollInteraction>
            
            <ScrollInteraction animationType="fade" delay={0.8}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.375rem', lg: '1.5rem' },
                  fontWeight: 400,
                  color: '#B8C5B8',
                  mb: 3,
                  lineHeight: 1.6,
                  textAlign: 'left',
                  maxWidth: '700px',
                }}
              >
                Medimos nuestra experiencia en la calidad del trabajo, no solo en el tiempo.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9375rem', md: '1.0625rem', lg: '1.1875rem' },
                  fontWeight: 400,
                  color: '#D4E0D4',
                  mb: 6,
                  lineHeight: 1.7,
                  textAlign: 'left',
                  maxWidth: '700px',
                }}
              >
                Garantizamos un trabajo honesto, eficiente y profundo en los problemas jurídicos que subyacen en los negocios.
              </Typography>
            </ScrollInteraction>

            <ScrollInteraction animationType="fade" delay={1.0}>
              <Box sx={{ mb: 6, textAlign: 'left' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem', lg: '1.25rem' },
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    color: '#FFFFFF',
                    mb: 2,
                    textTransform: 'uppercase',
                  }}
                >
                  Trabajo Personalizado vs. Estandarización
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9375rem', md: '1.0625rem', lg: '1.1875rem' },
                    fontWeight: 400,
                    color: '#B8C5B8',
                    mb: 2,
                    lineHeight: 1.7,
                    maxWidth: '700px',
                  }}
                >
                  Evitamos el riesgo de las "listas de chequeo" genéricas que homogeneizan el trabajo legal inadecuadamente. Nuestro trabajo es personal y directo: conocemos los riesgos específicos de tu negocio para diseñar la mejor estrategia.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '0.9375rem', md: '1.0625rem', lg: '1.1875rem' },
                    fontWeight: 400,
                    color: '#B8C5B8',
                    mb: 4,
                    lineHeight: 1.7,
                    maxWidth: '700px',
                    fontStyle: 'italic',
                  }}
                >
                  Creemos que los negocios deben ser creadores de riqueza para todas las partes.
                </Typography>
              </Box>
            </ScrollInteraction>

            <ScrollInteraction animationType="fade" delay={1.2}>
              <Box sx={{ mb: 0 }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: '#B8C5B8',
                    mb: 3,
                    textTransform: 'uppercase',
                    opacity: 0.6,
                    display: 'block',
                    textAlign: 'left',
                  }}
                >
                  Nuestros Pilares
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: { xs: 4, md: 5 },
                    maxWidth: '1000px',
                  }}
                >
                  <Box sx={{ textAlign: 'left', p: 0, borderLeft: '2px solid #B8C5B8', pl: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        color: '#B8C5B8',
                        mb: 2,
                        textTransform: 'uppercase',
                      }}
                    >
                      Tecnología
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#D4E0D4',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        fontWeight: 400,
                      }}
                    >
                      Aceleramos lo repetitivo para liberar recursos.
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'left', p: 0, borderLeft: '2px solid #B8C5B8', pl: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        color: '#B8C5B8',
                        mb: 2,
                        textTransform: 'uppercase',
                      }}
                    >
                      Data
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#D4E0D4',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        fontWeight: 400,
                      }}
                    >
                      Tomamos decisiones basadas en evidencia, no en intuiciones, anticipando riesgos.
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'left', p: 0, borderLeft: '2px solid #B8C5B8', pl: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '0.9375rem', md: '1rem' },
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        color: '#B8C5B8',
                        mb: 2,
                        textTransform: 'uppercase',
                      }}
                    >
                      Inteligencia Artificial
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#D4E0D4',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.875rem', md: '0.9375rem' },
                        fontWeight: 400,
                      }}
                    >
                      Aplicada con criterio legal para hacer lo complejo accesible y lo voluminoso manejable.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </ScrollInteraction>

          </Box>
        </Container>
      </Box>

      {/* Separador 1 - Imagen con frase llamativa */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '350px' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Imagen de fondo con transiciones suaves */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: 0,
            right: 0,
            bottom: '-10%',
            backgroundImage: 'url(/bosque-separador.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(31, 35, 48, 0.85) 0%, rgba(31, 35, 48, 0.7) 20%, rgba(31, 35, 48, 0.7) 80%, rgba(31, 35, 48, 0.85) 100%)',
              zIndex: 2,
            },
          }}
        />
        
        {/* Contenido */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, px: { xs: 4, md: 6 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                mb: 3,
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              No somos espectadores del cambio,
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#B8C5B8',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              somos arquitectos.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Innovación */}
      <Box id="innovacion" sx={{ 
        py: { xs: 8, md: 10 }, 
        backgroundColor: '#1F2330', 
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Imagen de fondo fragmentada izquierda con transición suave */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '-5%',
            width: '50%',
            height: '120%',
            backgroundImage: 'url(/bosque-fondo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center left',
            backgroundRepeat: 'no-repeat',
            opacity: 0.12,
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(31, 35, 48, 0.7) 40%, rgba(31, 35, 48, 0.95) 60%, #1F2330 75%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-20%',
              left: 0,
              right: 0,
              height: '20%',
              background: 'linear-gradient(180deg, #1F2330 0%, transparent 100%)',
            },
          }}
        />
        {/* Línea divisoria con verde */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.4), transparent)',
            zIndex: 1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: '1200px', mx: 'auto', mb: 4 }}>
            <ScrollInteraction animationType="slide" delay={0.2}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#B8C5B8',
                  mb: 2,
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  display: 'block',
                }}
              >
                Tecnología Legal
              </Typography>
              <ScrollText
                variant="h2"
                animationType="word"
                stagger={0.1}
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: '#B8C5B8',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                  textAlign: 'left',
                }}
              >
                Legal Tech & Innovación
              </ScrollText>
            </ScrollInteraction>
            
            <ScrollInteraction animationType="fade" delay={0.8}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.375rem', lg: '1.5rem' },
                  fontWeight: 400,
                  color: '#D4E0D4',
                  mb: 4,
                  textAlign: 'left',
                  maxWidth: '700px',
                }}
              >
                En Sólido, digitalizamos y hacemos más inteligentes los procesos jurídicos.
              </Typography>
            </ScrollInteraction>

            {/* Servicios de Tecnología Legal - Layout Compacto */}
            <ScrollInteraction animationType="fade" delay={1.2}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#B8C5B8',
                  mb: 3,
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  display: 'block',
                }}
              >
                Nuestros Servicios
              </Typography>
              
              {/* Grid de 3 columnas más compacto */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: { xs: 3, md: 4 },
                  maxWidth: '1200px',
                }}
              >
                {[
                  { title: 'Automatización de procesos', description: 'Generación automática de contratos y seguimientos.' },
                  { title: 'Software a la medida', description: 'Plataformas propias para gestión contractual, litigios y riesgos.' },
                  { title: 'Auditorías automatizadas', description: 'Matrices inteligentes para revisar nómina y obligaciones laborales.' },
                  { title: 'Estandarización documental', description: 'Plantillas inteligentes y cláusulas dinámicas para generación masiva.' },
                  { title: 'CLM', description: 'Trazabilidad completa de creación, firma y renovación de contratos.' },
                  { title: 'Flujos automatizados', description: 'Optimización del área jurídica eliminando tareas manuales.' },
                  { title: 'Compliance Tech', description: 'Alertas automáticas de cambios normativos y matrices de cumplimiento.' },
                  { title: 'Auditorías de proveedores', description: 'Herramientas digitales para evaluación documental y gestión de riesgos.' },
                  { title: 'Dashboards Legales', description: 'Análisis y reportería en tiempo real para decisiones basadas en datos.' },
                  { title: 'Gobierno Documental', description: 'Repositorios centralizados con control de versiones y búsquedas avanzadas.' },
                ].map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 2.5,
                      borderRadius: 0,
                      background: 'rgba(36, 44, 39, 0.4)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(184, 197, 184, 0.12)',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      minHeight: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        background: 'rgba(47, 58, 51, 0.5)',
                        borderColor: 'rgba(184, 197, 184, 0.25)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        color: '#B8C5B8',
                        mb: 1.5,
                        textTransform: 'uppercase',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                      color: '#D4E0D4',
                      lineHeight: 1.6,
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                  </Box>
                ))}
              </Box>
            </ScrollInteraction>

          </Box>
        </Container>
      </Box>

      {/* Separador 2 - Imagen con frase llamativa */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '350px' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Imagen de fondo con transiciones suaves */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: 0,
            right: 0,
            bottom: '-10%',
            backgroundImage: 'url(/bosque-separador.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(180deg, rgba(36, 44, 39, 0.9) 0%, rgba(36, 44, 39, 0.75) 20%, rgba(36, 44, 39, 0.75) 80%, rgba(36, 44, 39, 0.9) 100%)',
              zIndex: 2,
            },
          }}
        />
        
        {/* Contenido */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, px: { xs: 4, md: 6 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                mb: 3,
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              Integramos Legal Tech
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#B8C5B8',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
              }}
            >
              para ofrecer más calidad en menos tiempo.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Áreas de Práctica */}
      <Box id="areas" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#242C27', position: 'relative', overflow: 'hidden' }}>
        {/* Imagen de fondo fragmentada - esquina inferior derecha con transición suave */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            bottom: '-10%',
            right: '-5%',
            width: '55%',
            height: '120%',
            backgroundImage: 'url(/bosque-fondo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #242C27 0%, rgba(36, 44, 39, 0.95) 30%, rgba(36, 44, 39, 0.7) 50%, transparent 70%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '-20%',
              left: 0,
              right: 0,
              height: '20%',
              background: 'linear-gradient(180deg, #242C27 0%, transparent 100%)',
            },
          }}
        />
        {/* Línea divisoria con verde */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.4), transparent)',
            zIndex: 1,
          }}
        />
        <Container maxWidth="lg" sx={{ px: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: '1200px', mx: 'auto', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.6875rem',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#B8C5B8',
                mb: 2,
                textTransform: 'uppercase',
                opacity: 0.9,
                display: 'block',
              }}
            >
              Especialización
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 700,
                mb: 3,
                color: '#B8C5B8',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                textAlign: 'left',
              }}
            >
              La estrategia legal que acelera los negocios.
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem', lg: '1.375rem' },
                fontWeight: 400,
                color: '#D4E0D4',
                fontStyle: 'italic',
                textAlign: 'left',
                maxWidth: '700px',
                lineHeight: 1.6,
                mb: 0,
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
              gap: { xs: 4, md: 5 },
              maxWidth: '1200px',
              mx: 'auto',
            }}
          >
            {[
              { 
                title: 'Derecho de Empresa y de los Negocios', 
                desc: 'Derecho Comercial: Asesoría integral, revisión y elaboración de contratos privados, y acuerdos de colaboración (Joint Ventures, Consorcios). Derecho de Sociedades: Constitución de empresas, acuerdos de accionistas, reformas estatutarias, gobierno corporativo y procesos de liquidación. Derecho Transaccional (M&A): Debida diligencia (Due Diligence), compraventa de acciones (SPA), compraventa de activos (APA), fusiones y financiaciones. Secretaría General: Representación legal, mantenimiento de libros societarios, asistencia a Juntas Directivas y seguimiento de inscripciones de registro.',
                features: ['Derecho Comercial', 'Derecho de Sociedades', 'M&A', 'Secretaría General'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Regulación Minero-Energética', 
                desc: 'Asesoría en todas las fases del proyecto, desde la entrada de inversionistas hasta la operación (Upstream, Midstream, Downstream). Gestión de permisos, licencias ambientales y obligaciones regulatorias. Elaboración y negociación de contratos especializados: EPC/EPCM, PPA (Power Purchase Agreements), operación y suministro (ToP/TaP). Manejo de conflictos con comunidades y stakeholders.',
                features: ['Asesoría en todas las fases', 'Gestión de permisos', 'Contratos especializados', 'Relaciones con comunidades'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Derecho Público y Relaciones con el Estado', 
                desc: 'Relacionamiento: Negociación y ejecución de contratos estatales (concesiones, obra pública). Litigios: Estrategia legal en procesos contra la administración pública, agotamiento de vía administrativa y acciones constitucionales (tutelas, acciones de grupo). Servicios Públicos: Asesoría en el régimen especial de servicios públicos domiciliarios.',
                features: ['Contratos estatales', 'Litigios administrativos', 'Servicios públicos'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Innovación y Cumplimiento (Compliance)', 
                desc: 'Gestión Contractual: Diagnóstico legal y consultoría para entidades reguladas. Accountability Gerencial: Asesoría en normativas Anti Lavado de Activos (LA/FT), Ética Empresarial y Anticorrupción. Auditorías: Debida diligencia para prevención y mitigación de riesgos de corrupción.',
                features: ['Gestión Contractual', 'Accountability Gerencial', 'Auditorías'],
                ctaText: 'Conoce más',
                ctaHref: '#contacto'
              },
              { 
                title: 'Derecho Laboral, Seguridad Social y Migratorio', 
                desc: 'Consultoría Laboral: Estrategias de contratación, esquemas de remuneración y desvinculación (individual). Derecho Colectivo: Acompañamiento en negociaciones sindicales y relacionamiento colectivo sostenible. Litigios Laborales: Representación ante jueces laborales, UGPP y Ministerio de Trabajo. Asesoría Migratoria: Trámite de visas, cédulas de extranjería, convalidaciones y representación ante Migración Colombia.',
                features: ['Consultoría Laboral', 'Derecho Colectivo', 'Litigios Laborales', 'Asesoría Migratoria'],
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
      <Box id="talento" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#CCCCCC', position: 'relative' }}>
        {/* Línea divisoria sutil */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.4), transparent)',
          }}
        />
        <Container maxWidth="lg" sx={{ px: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: '1200px', mx: 'auto', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: '0.6875rem',
                fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#1F2330',
                mb: 2,
                textTransform: 'uppercase',
                opacity: 0.6,
                display: 'block',
              }}
            >
              Expertos
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 700,
                mb: 4,
                color: '#1F2330',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                textAlign: 'left',
              }}
            >
              Nuestro Equipo
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 4, md: 5 },
              maxWidth: '1200px',
              mx: 'auto',
            }}
          >
            {[
              {
                name: 'Enrique José Arboleda Perdomo',
                role: 'Consejero / Experto en Derecho Público',
                description: 'Exconsejero de Estado y miembro de la comisión redactora del CPACA. Árbitro de la Cámara de Comercio de Bogotá. Amplia experiencia en contratos estatales y regulación.',
                image: '/team/enrique-arboleda.jpg', // Ruta para foto
              },
              {
                name: 'Nicolás Arboleda Márquez',
                role: 'Socio / Experto en Minería, Energía e Infraestructura',
                description: 'Más de 15 años de experiencia liderando proyectos transnacionales. Ex Vicepresidente Legal de Minesa y del proyecto "La Luna". Reconocido como \'Rising Star\' por Legal 500.',
                image: '/team/nicolas-arboleda.jpg', // Ruta para foto
              },
              {
                name: 'Luis Gabriel Mendoza Macanaz',
                role: 'Socio / Experto en Derecho Laboral y Administrativo',
                description: 'Más de 18 años de experiencia. Ex Gerente de Relaciones Laborales de Nestlé de Colombia. Especialista en derecho colectivo, litigios y modelos de derechos humanos empresariales.',
                image: '/team/luis-mendoza.jpg', // Ruta para foto
              },
            ].map((member, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderRadius: 0,
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(184, 197, 184, 0.2)',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderColor: 'rgba(184, 197, 184, 0.4)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                {/* Foto del miembro */}
                <Box
                  sx={{
                    width: '100%',
                    height: '160px',
                    mb: 2,
                    borderRadius: 0,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(200, 200, 200, 0.5)',
                    position: 'relative',
                    backgroundImage: member.image ? `url(${member.image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: member.image ? 'none' : 'linear-gradient(135deg, rgba(184, 197, 184, 0.15) 0%, rgba(200, 200, 200, 0.4) 100%)',
                    },
                  }}
                >
                  {!member.image && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#1F2330',
                        fontSize: '3rem',
                        opacity: 0.2,
                      }}
                    >
                      👤
                    </Box>
                  )}
                </Box>

                {/* Nombre */}
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    color: '#1F2330',
                    mb: 1.5,
                    lineHeight: 1.3,
                  }}
                >
                  {member.name}
                </Typography>

                {/* Rol */}
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    color: '#1F2330',
                    mb: 2,
                    textTransform: 'uppercase',
                    opacity: 0.7,
                    display: 'block',
                  }}
                >
                  {member.role}
                </Typography>

                {/* Descripción */}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#2A2A2A',
                    lineHeight: 1.7,
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    flex: 1,
                  }}
                >
                  {member.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contacto */}
      <Box id="contacto" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#242C27', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Imagen de fondo sutil */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '100%',
            backgroundImage: 'url(/bosque-fondo.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.08,
            zIndex: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, #242C27 0%, transparent 40%)',
            },
          }}
        />
        
        {/* Línea divisoria sutil */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(184, 197, 184, 0.4), transparent)',
            zIndex: 1,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, px: { xs: 4, md: 6 } }}>
          <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
            {/* Header */}
            <Box sx={{ mb: 6, textAlign: 'left' }}>
              <Typography
                variant="overline"
                sx={{
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: '#B8C5B8',
                  mb: 2,
                  textTransform: 'uppercase',
                  opacity: 0.9,
                  display: 'block',
                }}
              >
                Contacto
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                  fontWeight: 700,
                  mb: 3,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  letterSpacing: '-0.01em',
                }}
              >
                ¿Listo para transformar su gestión legal?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                  fontWeight: 400,
                  color: '#B8C5B8',
                  maxWidth: '600px',
                  lineHeight: 1.7,
                }}
              >
                Conecte con nuestros expertos y descubra cómo podemos acelerar su estrategia legal.
              </Typography>
            </Box>

            {/* Cards de Contacto */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: { xs: 4, md: 5 },
                mb: 6,
              }}
            >
              {[
                {
                  name: 'Nicolás Arboleda Márquez',
                  role: 'Socio / Experto en Minería, Energía e Infraestructura',
                  email: 'nicolas.arboleda@solidolegal.com',
                  phone: '+57 300 532 5753',
                },
                {
                  name: 'Luis Gabriel Mendoza Macanaz',
                  role: 'Socio / Experto en Derecho Laboral y Administrativo',
                  email: 'luis.mendoza@solidolegal.com',
                  phone: '+57 311 591 6643',
                },
              ].map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 4,
                    borderRadius: 0,
                    background: 'rgba(36, 44, 39, 0.6)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(184, 197, 184, 0.15)',
                    position: 'relative',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      background: 'rgba(47, 58, 51, 0.7)',
                      borderColor: 'rgba(184, 197, 184, 0.3)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  {/* Línea superior decorativa */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '60px',
                      height: '2px',
                      background: '#B8C5B8',
                      opacity: 0.6,
                    }}
                  />
                  
                  {/* Nombre */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      mb: 1.5,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {member.name}
                  </Typography>
                  
                  {/* Rol */}
                  <Typography
                    variant="overline"
                    sx={{
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      letterSpacing: '0.08em',
                      color: '#B8C5B8',
                      mb: 3,
                      textTransform: 'uppercase',
                      opacity: 0.8,
                      display: 'block',
                    }}
                  >
                    {member.role}
                  </Typography>
                  
                  {/* Información de contacto */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 0,
                          background: 'rgba(184, 197, 184, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid rgba(184, 197, 184, 0.2)',
                        }}
                      >
                        <Email sx={{ color: '#B8C5B8', fontSize: '1.125rem' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="overline"
                          sx={{
                            fontSize: '0.625rem',
                            fontWeight: 400,
                            letterSpacing: '0.1em',
                            color: '#B8C5B8',
                            mb: 0.5,
                            textTransform: 'uppercase',
                            opacity: 0.7,
                            display: 'block',
                          }}
                        >
                          Email
                        </Typography>
                        <Typography
                          variant="body1"
                          component="a"
                          href={`mailto:${member.email}`}
                          sx={{
                            color: '#D4E0D4',
                            fontSize: '0.9375rem',
                            textDecoration: 'none',
                            fontWeight: 400,
                            display: 'block',
                            '&:hover': {
                              color: '#B8C5B8',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {member.email}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        sx={{
                          width: '40px',
                          height: '40px',
                          borderRadius: 0,
                          background: 'rgba(184, 197, 184, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          border: '1px solid rgba(184, 197, 184, 0.2)',
                        }}
                      >
                        <Phone sx={{ color: '#B8C5B8', fontSize: '1.125rem' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="overline"
                          sx={{
                            fontSize: '0.625rem',
                            fontWeight: 400,
                            letterSpacing: '0.1em',
                            color: '#B8C5B8',
                            mb: 0.5,
                            textTransform: 'uppercase',
                            opacity: 0.7,
                            display: 'block',
                          }}
                        >
                          Teléfono
                        </Typography>
                        <Typography
                          variant="body1"
                          component="a"
                          href={`tel:${member.phone.replace(/\s/g, '')}`}
                          sx={{
                            color: '#D4E0D4',
                            fontSize: '0.9375rem',
                            textDecoration: 'none',
                            fontWeight: 400,
                            display: 'block',
                            '&:hover': {
                              color: '#B8C5B8',
                            },
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {member.phone}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Ubicación */}
            <Box
              sx={{
                p: 5,
                borderRadius: 0,
                background: 'rgba(36, 44, 39, 0.4)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(184, 197, 184, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                maxWidth: '500px',
              }}
            >
              <Box
                sx={{
                  width: '50px',
                  height: '50px',
                  borderRadius: 0,
                  background: 'rgba(184, 197, 184, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid rgba(184, 197, 184, 0.2)',
                }}
              >
                <LocationOn sx={{ color: '#B8C5B8', fontSize: '1.5rem' }} />
              </Box>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: '0.625rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: '#B8C5B8',
                    mb: 0.5,
                    textTransform: 'uppercase',
                    opacity: 0.7,
                    display: 'block',
                  }}
                >
                  Ubicación
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 400,
                  }}
                >
                  Bogotá, Colombia
                </Typography>
              </Box>
            </Box>
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