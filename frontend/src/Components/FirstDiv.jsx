
import { Box, Button , Icon} from '@chakra-ui/react';
import backgroundImage from '../assets/64572.jpg';
import { FaArrowRight } from 'react-icons/fa';



const FirstDiv = () => {

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
      }}
    >
      
      
      <Box alignSelf="flex-start" marginLeft="150px" marginTop="400px">
        
      <Button onClick={() => window.location.href = '/adopt'} background={'orange'} color={'black'} >Get Started</Button>
        
        <Icon as={FaArrowRight} ml={2} />
      </Box>
      </Box>

      
  );
};

export default FirstDiv;
