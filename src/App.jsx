import { About, Hero, Categories, MostPopular, Footer } from './sections';
import { Nav } from "./components";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b bg-[#F8F9FB]'>
        <Hero />
      </section>
      <section className='padding-x py-10'>
        <About />
      </section>
      <section className='padding'>
        <Categories />
      </section>
      
      <section className='padding-x sm:py-32 py-16 w-full'>
        <MostPopular />
      </section>
  
      <section className='bg-[#F5F1EE] padding-x padding-t pb-8'>
        <Footer />
      </section>

    </main>
  )
}

export default App
