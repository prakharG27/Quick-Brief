import { Card, CardContent, Typography, Box, styled, Grid } from "@mui/material";


const Image = styled('img')({
    height: 268,
    width: '88%',
    borderRadius: 5,
    objectFit: 'cover'
});

const Component = styled(Card)`
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    margin-bottom: 20px;
`;

const Container = styled(CardContent) `
    display: flex;
    padding: 8px;
    padding-bottom: 4px !important;
`;

const Text=styled(Typography)`
        font-weight:300;
        color:#44444d;
`;


const Article=(data)=>{
      return(
          
        <Component>
            <Container>

                <Grid container>
                    <Grid lg={5} md={5} sm={5} xs={12} item>

                        <Image src={data.url}/>

                    </Grid>
                    <Grid lg={7} md={7} sm={7} xs={12} item>
                        <Text>{data.title}</Text>

                    </Grid>

                </Grid>

            </Container>
        </Component>

        
      )
}

export default Article;