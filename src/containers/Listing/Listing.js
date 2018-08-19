import React from 'react';
import Card from '../../components/Card/Card';
import classes from './Listing.css';

const listing = (props) => {
  console.log(props.listings);
  return (
    <div className={classes.listingContainer}>
      {props.listings.map((listing) => {
        return <Card key={listing.publishedAt} listingData={listing} />;
      })}
    </div>
  );
};

export default listing;
