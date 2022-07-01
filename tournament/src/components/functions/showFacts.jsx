import { useEffect, useState } from 'react';

export default async function showFacts(user) {
  const token = sessionStorage.getItem('token');
  const name = user.split(' ');
  const req = await fetch(
    `http://localhost:8189/api/v1/app/user/info?surname=${name[1]}&name=${name[0]}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
  const res = await req.json();
  console.log(res);
}
