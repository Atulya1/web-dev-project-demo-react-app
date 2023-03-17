

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/webdev.jpg';
import InstaTele from '../Assets/Images/img.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const WebDevProject = () => {

    return (
        <Header>
            <Typography variant="h4">Web Development Project</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default WebDevProject;