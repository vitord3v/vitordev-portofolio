import { Header } from '../components/Header'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, IconButton, Button, Text, Image } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
    <Header />
    <section>
    <Card maxW='md' align='center' margin={'auto'} marginTop={'2'} >
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://i.imgur.com/NjMhlRa.png' />

            <Box>
              <Heading size='sm'>VitordevETH</Heading>
              <Text>Designer, Front End Developer</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={''}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text textAlign={'justify'} marginBottom={'2'} >
          "My name is Vitor from 🇧🇷
          I'm a Web3 Software Developer Fullstack, and I have a passion for creating engaging and interactive websites. 💻✨
        </Text>
        <Text textAlign={'justify'} marginBottom={'2'} >
          With a background in both front-end and back-end development, I love combining my technical skills with my creative mindset to bring ideas to life on the web. 🚀🎨 </Text>
        <Text textAlign={'justify'} >
          Let's collaborate and turn your web ideas into reality, together!"
          </Text>
      </CardBody>
      <Image
        objectFit='cover'
        src='/coin-image.jpg'
        alt='Chakra UI'
      />

      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button flex='1' variant='ghost' leftIcon={''}>
          Like
        </Button>
        <Button flex='1' variant='ghost' leftIcon={''}>
          Comment
        </Button>
        <Button flex='1' variant='ghost' leftIcon={''}>
          Share
        </Button>
      </CardFooter>
    </Card>
    </section>
    </>
  )
}
