import {Box,styled} from '@mui/material';


//components
import Header from './components/Header'
import InfoHeader from './components/InfooHeader';
import Articles from  './components/Article';

const Container=styled(Box)`
         width:60%;
         margin:40px auto 0 auto;
`;

function App() {
  return (
    <Box >
         <Header/>
         <Container>
         <InfoHeader/>
         <Articles/>
         </Container>
         </Box>
  );
}

export default App;
