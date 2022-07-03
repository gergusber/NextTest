import type { NextPage } from 'next'
import Head from 'next/head'
import listing from '../data/listings.json'
import CarouselCustom from './components/CarouselCustom'
import "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to app
        </h1>
        
         <div className="max-h-2.5">
          <CarouselCustom />
        </div>

      
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
      
      </footer>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const listingData = listing;

  // By returning { props: { listingData } }, the index component
  // will receive `listing` as a prop at build time
  return {
    props: {
      listingData,
    },
  }
}

export default Home
