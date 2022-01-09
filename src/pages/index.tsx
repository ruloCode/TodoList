import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {TodoListTemplate} from '../components/templates/TodoListTemplate'
// import { HeaderText } from '../components/atoms/typography/headerText/HeaderText';
// import { ProfilePicture } from '../components/atoms/ProfilePicture/ProfilePicture';
// import { SmallText } from '../components/atoms/typography/smallText/SmallText';
// import { ProgressBar } from '../components/atoms/progressBar/ProgressBar';
import { Header } from '../components/organisms/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js 100</title>
        <meta
          name="Description"
          content="Build a PWA with Next.js to achieve 100 lighthouse score."
        />
      </Head>
      
      <TodoListTemplate>
        <Header />

        

        {/* <TodoListGroup /> */}
        {/* <SearchBar /> */}
      </TodoListTemplate>
    </>
  );
};

export default Home;
