import { Box } from '@mui/material';
import ServiciosSection from '../../Components/Public/ServiciosSection';
import CitasSection from '../../Components/Public/CitasSection';
import EducacionSection from '../../Components/Public/EducacionSection';

const Home = () => {
    return (
        <Box>
            <ServiciosSection />
            <CitasSection />
            <EducacionSection />
        </Box>
    );
};

export default Home;
