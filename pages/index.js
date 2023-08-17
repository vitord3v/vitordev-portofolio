import { Header } from '../components/Header'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, IconButton, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Home() {
  const coinRef = useRef(null);

  useEffect(() => {
    if (coinRef.current) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(coinRef.current, {
        rotationY: 360,
        duration: 3,
        ease: "power1.inOut"
      });
    }
  }, []);

  return (
    <>
      <Header />
      <Flex>
        <Flex margin='auto' marginTop='10'>
          <Image ref={coinRef} src='/ethereum-classic-logo.svg' width='70' height='70' />
        </Flex>
      </Flex>
      <section>
        <Flex flex='1' gap='4' alignItems='center' justifyContent='center' flexWrap='wrap' mt='6'>
          <Avatar name='Segun Adebayo' src='https://i.imgur.com/NjMhlRa.png' />
          <Box>
            <Heading size='sm'>VitordevETH</Heading>
            <Text>Web3 developer</Text>
          </Box>
        </Flex>
        <Flex>
          <Card maxW='md' align='center' justifyContent='center' margin={'auto'} marginTop='4rem' backgroundColor='transparent' border='1px' borderColor='red.100' >
            <CardBody>
                <Text textAlign={'justify'} marginBottom={'2'}>
                  My name is Vitor from 🇧🇷
                  I'm a Web3 Software Developer Fullstack/web3, and I have a passion for creating engaging and interactive websites. 💻✨
                </Text>
                <Text textAlign={'justify'} marginBottom={'2'}>
                  With a background in both front-end and back-end development, I love combining my technical skills with my creative mindset to bring ideas to life on the web. 🚀🎨 </Text>
                <Text textAlign={'justify'}>
                  Let's collaborate and turn your web ideas into reality, together!"
                </Text>
            </CardBody> 
          </Card>
          <Card maxW='md' align='center' justifyContent='center' margin={'auto'} marginTop='4rem' backgroundColor='transparent' borderColor='white' border='1px' >
            <CardBody>
                <Text>Meu nome é Vitor do 🇧🇷 Sou um Desenvolvedor de Software Web3 Fullstack e tenho paixão por criar sites envolventes e interativos. 💻✨</Text>
                <Text textAlign={'justify'} marginBottom={'2'}>
                Com experiência tanto em desenvolvimento front-end quanto back-end, adoro combinar minhas habilidades técnicas com minha mentalidade criativa para dar vida às ideias na web. 🚀🎨
                </Text>
                <Text textAlign={'justify'}>
                  Let's collaborate and turn your web ideas into reality, together!"
                </Text>
            </CardBody>
          </Card>
        </Flex>
        
      </section>
    </>
  )
}
