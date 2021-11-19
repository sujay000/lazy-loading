import React, { Suspense } from "react";
import { images } from "./data"; 
import Typography from '@material-ui/core/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
const Image = React.lazy(() => import("./Image"));


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (

    <div>
       <ThemeProvider theme={darkTheme}>
      <Typography variant="h2" align="center" gutterBottom>
        Lazy Loading Images
      </Typography>

      <Suspense 
        fallback={
          <div>
            <Typography variant="h3" align="center" gutterBottom>
              Loading...
            </Typography>
            
          </div>
        }>
        <Grid container spacing={1} > 
          
            {images.map((image) => (
              <Image key={image.id} src={image.download_url} />
            ))}
          
        </Grid>
        

      </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
