import {useEffect} from 'react'
import Header from '../pages/client/headers/header'
import Banner from '../pages/client/banners/banner'
import Skill from '../pages/client/skills/skill'
import Projects from '../pages/client/project/projects'
import Contact from '../pages/client/contacts/contact'
import '../assets/client/root.css'

const RootLayout = () => {
  useEffect(()=>{
    const themeToggler = document.querySelector('#theme-toggler')  as HTMLElement;
  themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}
  })
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