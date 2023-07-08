import { CircularProgress ,Typography ,Box } from "@mui/material";



const SuspenseLoader = () =>{
    return (
       <Box>
        <CircularProgress />
        <Typography>Loading...</Typography>
       </Box>
    )
}

export default SuspenseLoader;