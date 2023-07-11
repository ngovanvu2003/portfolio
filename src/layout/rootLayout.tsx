import React from 'react'
import Header from '../pages/client/headers/header'
import Banner from '../pages/client/banners/banner'
import Skill from '../pages/client/skills/skill'
import Projects from '../pages/client/project/projects'
import Contact from '../pages/client/contacts/contact'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Skill/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default RootLayout