import { useCallback, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

async function getFact() {
  const token = sessionStorage.getItem('token');
  const req = await fetch('http://localhost:8189/api/v1/app/tablo', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const res = await req.json();
  return res;
}

export default function RandomFact() {
  const [fact, setFacts] = useState('');

  const randmFact = useCallback(async () => {
    const res = await getFact();
    setFacts(res);
  });

  useEffect(() => {
    randmFact();
  }, []);

  console.log(fact);

  if (fact) {
    return (
      <div className="factOfTheDay">
        <div className="factTitle">
          RANDOM FACT ABOUT {fact.name} {fact.surname}
        </div>
        <div className="factBody">
          {'1)'} {fact.fact}
          {'2)'} {fact.done}
        </div>
        <div className="author">
          {fact.authorName} {fact.authorSurname}
        </div>
      </div>
    );
  }
  return <ReactLoading color={'orange'} className="center" />;
}
