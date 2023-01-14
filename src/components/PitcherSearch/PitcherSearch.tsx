import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function PitcherSearch() {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch(query);
  };

  const handleSearch = (searchQuery: string) => {
    history.push(`/pitcher/${searchQuery}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
}
