
import { Box, Button , Icon} from '@chakra-ui/react';
import backgroundImage from '../assets/64572.jpg';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const FirstDiv = () => {
  const navigate = useNavigate()
  return (
    <Box
      className='home'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
      }}
    >
      <Box  style={{
        // border:"2px solid",
        width:"260px",
        position:"absolute",
        left:'5%',
        top:'20%',

      }}>
        <h1 style={{fontSize:"2rem",fontWeight:"bold",color:"yellow"}}>" You can't buy love, but you can rescue it "</h1>

      </Box>
      
      <Box alignSelf="flex-start" marginLeft="150px" marginTop="250px">
        
      <Button onClick={() => navigate("/adopt")} background={'orange'} color={'black'} >Get Started</Button>
        
        <Icon as={FaArrowRight} ml={2} />
      </Box>
      </Box>

      
  );
};

export default FirstDiv;
