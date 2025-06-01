
import React from 'react';
import { Navigate } from 'react-router-dom';

const Feed = () => {
  // Redirect to the community feed page
  return <Navigate to="/feed" replace />;
};

export default Feed;
