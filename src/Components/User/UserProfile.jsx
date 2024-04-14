import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

const UserProfile = () => {
  const { id } = useParams();
  return (
    <section className="container mainSection">
      <h1 className="tittle">{id}</h1>
      <Head title={id} />
      <Feed user={id} />
    </section>
  );
};

export default UserProfile;
