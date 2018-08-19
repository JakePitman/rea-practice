import React from 'react';
import classes from './Card.css';

const card = (props) => {
  const listing = props.listingData;
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          className={classes.urlImage}
          src={listing.urlToImage}
          alt={listing.title}
        />
      </div>
      <div className={classes.cardContent}>
        <h1 className={classes.title}>{listing.title}</h1>
        <h2 className={classes.author}>{listing.author}</h2>
        <h2 className={classes.publishedAt}>{listing.publishedAt}</h2>
        <h3 className={classes.description}>{listing.description}</h3>
      </div>
    </div>
  );
};

export default card;
