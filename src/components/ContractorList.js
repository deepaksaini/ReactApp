import React from 'react';
export default function ContractorList(){ const contractors=[{id:1,name:'John Doe'}]; return <ul>{contractors.map(c=><li key={c.id}>{c.name}</li>)}</ul>; }