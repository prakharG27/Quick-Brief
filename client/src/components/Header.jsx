import {AppBar,Toolbar,styled} from '@mui/material';

import {Menu} from '@mui/icons-material';

const StyleHeader=styled(AppBar)`
       background:#fff;
       height:70px;
`;
const MenuIcons=styled(Menu)` 
        background:#000;
`;
const Image=styled('img')({
    height:55,
    margin:'auto',
    paddingHeight:70,
})

const  Header=()=>{

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return(
        <StyleHeader position="static">
            <Toolbar>
             <MenuIcons/>
             < Image src={url}/>
            </Toolbar>
        </StyleHeader>
    )
}
export default Header;