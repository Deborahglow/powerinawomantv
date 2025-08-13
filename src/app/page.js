'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import Nominees from './components/Nominees';
import Contacts from './components/Contacts';

export default function Home() {
  return (
        <>
          <Hero/>
          <About/>
          <Nominees/>
          <Contacts/>
        </>
  );
}
