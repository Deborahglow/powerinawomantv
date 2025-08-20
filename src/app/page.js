'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import Nominees from './components/Piaw';
import Iawa from './components/Iawa';
import Contacts from './components/Contacts';
import Video from './components/Video';

export default function Home() {
  return (
        <>
          <Hero/>
          <About/>
          <Nominees/>
          <Iawa/>
          <Contacts/>
          <Video/>
        </>
  );
}
