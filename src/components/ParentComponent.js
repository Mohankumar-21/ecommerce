
import React, { useState } from 'react';
import Navbar from './navbar';
import Shop from './Shop';

const ParentComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <Shop searchQuery={searchQuery} />
    </div>
  );
};

export default ParentComponent;
