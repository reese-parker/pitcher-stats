import React from 'react';
import { useParams } from 'react-router-dom';

export function Pitcher() {
  let { pitcher } = useParams<{ pitcher: string }>();

  return (
    <div>
      <h1>{pitcher}</h1>
    </div>
  );
}
