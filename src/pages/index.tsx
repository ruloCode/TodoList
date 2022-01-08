import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {TodoListTemplate} from '../components/templates/TodoListTemplate'
// import { TodoList } from '../components/organisms/TodoList/TodoList';

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
        todo list
        {/* <Header /> */}
        {/* <TodoListGroup /> */}
        {/* <SearchBar /> */}
      </TodoListTemplate>
    </>
  );
};

export default Home;
