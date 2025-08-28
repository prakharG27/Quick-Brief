import { useEffect,useState } from 'react';

import {Box} from '@mui/material';

import { getnews } from '../service/api';

import Article from './articl';


const Articles=()=>{
  const[news,setNews]=useState([]);

    useEffect(()=>{
  dailynews();
  },[]  );

  const dailynews =async()=>{
    let response =await getnews();
    
    setNews(response.data);
  }
  

   return (
       <Box>{

        news.map(data=>{
          return <Article data={data}/>
        }

        )


        }

       </Box>
    )
}

export default Articles;