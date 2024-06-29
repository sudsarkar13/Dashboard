/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React from 'react';

const Books: React.FC = () => {
  return (
    <main>
      <Head>
        <title>Coder's Book | Books</title>
        <meta name="description" content="Coder's Book | Books" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>Books</div>
    </main>
  );
};

export default Books;