
import * as React from 'react'; 
import Box from '@mui/material/Box';

import { Input } from '@mui/material';


  
export const AgregarPacientes = () => {
    return (
        <Box  component="form"
        sx={{
          '& .MuiInput-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <div>
        <Input
          required
          id="outlined-required"
          defaultValue="Hello World"
        />
                <Input
          required
          id="outlined-required"
          defaultValue="Hello World"
        />
                <Input
          required
          id="outlined-required"
          defaultValue="Hello World"
        />
                     <Input
          required
          id="outlined-required"
          defaultValue="Hello World"
        />
        

        </div>
        </Box>
      );
    }