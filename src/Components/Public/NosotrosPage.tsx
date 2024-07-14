import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';

const cardData = [
  {
    title: 'Arias Alejandro Miguel Angel',
    image: './icono.png',
    alt: 'icono'
  },
  {
    title: 'Florio Ramos Katherine',
    image: './icono.png',
    alt: 'icono'
  },
  {
    title: 'González Carrasco América Esbeidy',
    image: './icono.png',
    alt: 'icono'
  },
  {
    title: 'Hernández Sánchez Jorge Ariel',
    image: '/icono.png',
    alt: 'icono'
  },
  {
    title: 'May Canul Raúl Joaquín',
    image: './icono.png',
    alt: 'icono'
  }
];

export default function Nosotros() {
  return (
    <>
      <img src="image20.png" alt="Legal" style={{ width: "100%", height: "auto", marginTop: 50 }} />
      <Container maxWidth="xl" sx={{ marginTop: 5 }}>
        <Box display="flex" justifyContent="space-between" flexWrap="wrap" gap={2}>
          {cardData.map((card, index) => (
            <Card 
              key={index} 
              sx={{ 
                maxWidth: 190, 
                backgroundColor: '#F3F3F3', 
                color: '#263339', 
                boxShadow: 3, 
                borderRadius: 3, 
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': { 
                  transform: 'scale(1.05)', 
                  boxShadow: 6 
                } 
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.alt}
                  sx={{ height: 190, width: 190}}
                />
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div" 
                    sx={{ fontSize: 15, textAlign: 'center', p: 0.5, fontWeight: 'semibold' }}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}
