import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ShowChild() {
  const [child, setChild] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:3000/api/v1/child/');
  });

  return <div>ShowChild</div>;
}
