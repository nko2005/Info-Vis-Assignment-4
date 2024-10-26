import Head from 'next/head';
import Assignment4Component from './assignment4_nawaf'; // Adjust the path as necessary

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment 4 Visualization</title>
        <meta name="description" content="Assignment 4 Visualization using D3 and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Assignment 4 Visualization</h1>
        <Assignment4Component />
      </main>
    </>
  );
}