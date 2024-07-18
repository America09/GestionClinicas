import { Box, Typography, Grid } from "@mui/material";

const Terminos = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 4, md: 6 }, mt: 4 }}>
      <img
        src="image18.png"
        alt="Términos y Condiciones"
        style={{ width: "100%", height: "100%", objectFit: "cover", marginTop: 50 }}
      />
      <Typography
        sx={{
          marginTop: 5,
          textAlign: "center",
          fontWeight: "semibold",
          fontSize: { xs: 20, sm: 25 },
          color: "#408D86",
        }}
      >
        Términos y Condiciones de Gestión de Clínicas.
      </Typography>
      <Grid container spacing={2} sx={{ textAlign: 'justify', p: { xs: 2, sm: 5 } }}>
        <Grid item xs={12}>
          <Typography>
            Bienvenido/a a la aplicación web Gestión de Clínicas.
            <br />
            Antes de utilizar nuestros servicios, te pedimos que leas atentamente los siguientes términos y condiciones.
            <br />
            Al acceder y utilizar esta aplicación web, aceptas estar legalmente vinculado/a por estos términos y condiciones. Si no estás de acuerdo con alguno de los términos establecidos a continuación, por favor, no utilices esta aplicación.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            1. Uso de la Aplicación:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            La aplicación web Gestión de Clínicas está diseñada para proporcionar información sobre los servicios médicos, programar citas, acceder a resultados de exámenes y otras funcionalidades relacionadas con la salud.
            <br />
            Te comprometes a utilizar esta aplicación de manera ética y legal, y a no realizar ningún uso indebido de la misma.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            2. Privacidad:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Respetamos tu privacidad y protegemos tus datos personales de acuerdo con nuestra Política de Privacidad.
            <br />
            Al utilizar esta aplicación, aceptas las prácticas de privacidad descritas en dicha política.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            3. Responsabilidad:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Gestión de Clínicas se esfuerza por proporcionar información precisa y actualizada a través de esta aplicación web. Sin embargo, no garantizamos la exactitud, integridad o idoneidad de la información para cualquier propósito específico.
            <br />
            No nos hacemos responsables de cualquier daño directo, indirecto, incidental, especial, consecuente o punitivo que pueda surgir del uso o la incapacidad de usar esta aplicación web.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            4. Seguridad:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Implementamos medidas de seguridad para proteger tu información contra accesos no autorizados, alteraciones, divulgaciones o destrucciones no autorizadas.
            <br />
            Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            5. Propiedad Intelectual:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Esta aplicación web, incluidos todos los contenidos, diseños, logotipos y funcionalidades, están protegidos por leyes de propiedad intelectual y son propiedad del Gestión de Clínicas o de terceros que nos han otorgado licencias.
            <br />
            No se permite el uso no autorizado de ningún material de esta aplicación.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            6. Modificaciones:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
            <br />
            Las modificaciones entrarán en vigor inmediatamente después de su publicación en esta aplicación web. Es tu responsabilidad revisar periódicamente estos términos y condiciones para estar al tanto de las actualizaciones.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            7. Ley Aplicable:
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de los Estados Unidos Mexicanos, sin tener en cuenta sus conflictos de disposiciones legales.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }}>
            Última actualización: [15/07/2024]
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Terminos;
