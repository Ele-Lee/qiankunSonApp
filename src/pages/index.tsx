import React from 'react';
import { Redirect } from 'react-router';

const Welcome: React.FC = () => {
  return <Redirect to={{ pathname: `daily/report` }} />;
};

export default Welcome;
