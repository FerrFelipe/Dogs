import React from 'react';
import styles from './FeedModal.module.css';
import UseFetch from '../../Hooks/UseFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = UseFetch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
