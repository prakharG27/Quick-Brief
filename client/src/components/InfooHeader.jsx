import {Box, Typography,styled } from '@mui/material';

const Container=styled(Box)` 
       background:red;
       color:white;
       display:flex;
       align-items:centre;
       height:48px;
       margin-bottom:30px;

`;

const Image=styled('img')({
       height:34,
       '&:last-child':{
        margin:'0 50px 0 20px'
       }
       
})

const Text=styled(Typography)`
       font-size:14px;
       font-weight:300;
       margin: 5px 5px 5px auto;
`;


const InfoHeader=()=>{

  const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';


    return(
  <Container>
    <Text>
        For the best Experience use inshor app in smartphones
    </Text>
    <Box style={{display:'flex',marginLeft:'auto',marginTop:'5px'}} >
      <Image src={appleStore} alt="appleStore"/>
      <Image src={googleStore} alt="googleStore"/>
    </Box>
  </Container>
    )

}

export default InfoHeader;