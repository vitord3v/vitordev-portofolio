import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { LiaDiscord } from 'react-icons/lia'
import { AiFillGithub } from 'react-icons/ai'

export const Header = () => {
    return (
        <header>
        <Tabs variant='soft-rounded' align='center' marginTop='2' >
            <TabList>
                <Tab>Projects</Tab>
                <Tab>About/Resume</Tab>
                <Tab><LiaDiscord size={30} /></Tab>
                <Tab><AiFillGithub size={30}></AiFillGithub></Tab>
            </TabList>
        </Tabs>
        </header>
    )
}