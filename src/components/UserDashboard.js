import React from 'react';
import './UserDashboard.css';
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Card,
  Spacer,
} from '@chakra-ui/react';

export const UserDash = () => {
  return (
    <ChakraProvider>
        <div class="row">
            <div class="column">
                    <Container mt={3} position='relative' right='500' >
                    <Box bg={'lightgray'}  p={10} boxShadow='md' h={240} w={1190}>
                    <Heading bg='black' color={'white'} w={140} mb={10} mr={10000} position="relative"  right='10' bottom='10'>Projects</Heading>
                    <Flex align="center" justify="center">
                    <Card mr={50} p={5} position={'relative'} bottom={20} w='300px' h='180px'>
                        <Heading fontSize='30px'>Custom App</Heading>
                        <Text p={2}>
                        Status: 
                        </Text>
                        <Text p={2}>
                        Notes:
                        </Text>
                        <Text p={2}>
                        Manager: 
                        </Text>
                    </Card>

                    <Card mr={50} p={5} position={'relative'} bottom={20} w='300px' h='180px'>
                        <Heading fontSize='30px'>Custom App</Heading>
                        <Text p={2}>
                        Status: 
                        </Text>
                        <Text p={2}>
                        Notes:
                        </Text>
                        <Text p={2}>
                        Manager: 
                        </Text>
                    </Card>
                    </Flex>
                    </Box>
                </Container>


                <Container mt={5} position='relative' right='500'>
                    <Box bg={'lightgray'}  h={350} w={1190} boxShadow='md'>
                    <Heading bg='black' color={'white'} w={160} mb={10} mr={10000} position="relative"  right='0' bottom='0'>Analytics</Heading>
                    <Flex align="center" justify="center">
                    <Card>
                        <Heading >Testing</Heading>
                    </Card>
                    </Flex>
                    </Box>
                </Container>


                <Container mt={5} position='relative' right='500'>
                <Box bg={'lightgray'}  h={250} w={1520}boxShadow='md'>
                <Heading bg='black' color={'white'} w={220} mb={10} mr={10000} position="relative"  right='0' bottom='0' fontSize={'lg'}>Projects recommendation  </Heading>
                <Flex align="center" justify="center">
                <Card>
                    <Heading>Testing</Heading>
                </Card>
                <Spacer />
                <Card>
                    <Heading w='400px' m={6} p={1}>Testing2</Heading>
                </Card>
                </Flex>
                </Box>
                </Container>
            </div>
            <div class="column">
                <div class="dot"></div>
                <p>user name</p>

                <Container mt={5} position='relative' right='500'>
                <Box bg={'lightgray'}  h={503} w={300}boxShadow='md'>
                <Heading bg='black' color={'white'} w={115} mb={10} mr={10000} position="relative"  right='0' bottom='0' fontSize={'lg'}>To-DO</Heading>
                <Flex align="center" justify="center">
                <Card>
                    <Heading>To-DO</Heading>
                </Card>
                <Spacer />
                </Flex>
                </Box>
                </Container>
            </div>
        </div>

    </ChakraProvider>
  );
}

export default UserDash;