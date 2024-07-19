import { Button, Box } from "@mui/material";

export const Boton = () => {
  return (


<Box sx={{ textAlign: 'center', mt: 2 }}>
<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#408D86', color: 'white', '&:hover': { backgroundColor: '#004d50' } }}
            >
              Enviar
            </Button>
        </Box>
  )
}
