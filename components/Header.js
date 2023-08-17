import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'

export const Header = () => {
    return (
        <header>
        <Tabs variant='soft-rounded' align='center' marginTop='2' >
            <TabList>
                <Tab><AiFillGithub size={30}></AiFillGithub></Tab>
                <Tab>CV</Tab>
            </TabList>
        </Tabs>
        </header>
    )
}