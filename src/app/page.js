'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import Nominees from './components/Piaw';
import Iawa from './components/Iawa';
import Visionary from './components/Visionary';
import Contacts from './components/Contacts';
import Video from './components/Video';

export default function Home() {
  return (
        <>
          <Hero/>
          <About/>
          <Nominees/>
          <Iawa/>
          <Visionary/>
          <Contacts/>
          <Video/>
        </>
  );
}
