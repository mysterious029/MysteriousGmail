import { Box,Typography } from '@mui/material';
import { useRouteError } from 'react-router-dom';


const Errorcomponent = () =>{
    const error=useRouteError();
    console.log(error);
    return (
     <Box style={{marginLeft:250}} >
        <Typography>There was an error loading this page</Typography>
     </Box>
    )
}

export default Errorcomponent;