import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../ui/Spinner';

export default function ShowChild() {
  const [child, setChild] = useState({});
  const [childImmunizations, setChildImmunizations] = useState([]);
  const [isLoadingOne, setIsLoadingOne] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoadingOne(true);
    setIsLoadingTwo(true);
    axios
      .get(`http://localhost:3000/api/v1/child/${id}`, {
        withCredentials: true,
      })
      .then((data) => {
        setChild(data.data.data);
        setIsLoadingOne(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingOne(false);
        toast.error('There was an error fetching information');
      })
      .finally(() => {
        setIsLoadingOne(false);
      });

    axios
      .get(`http://localhost:3000/api/v1/child/${id}/immunizations`, {
        withCredentials: true,
      })
      .then((data) => {
        setChildImmunizations(data.data.data);
        setIsLoadingTwo(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadingTwo(false);
        toast.error('There was an error fetching information');
      })
      .finally(() => {
        setIsLoadingTwo(false);
      });
  }, []);

  const formattedDateOfBirth = new Date(child.dateOfBirth).toLocaleDateString();

  const immunizationCards = childImmunizations.map((immunization) => (
    <div
      key={immunization._id}
      className="card shadow p-4 mb-3 bg-slate-100 rounded-md"
    >
      <h4>Vaccine: {immunization.vaccineId.name}</h4>
      <p>
        Current Status:{' '}
        {immunization.currentStatus.replace(/^./, (match) =>
          match.toUpperCase()
        )}
      </p>
      {immunization.administrationDate && (
        <p>
          Administration Date:{' '}
          {new Date(immunization.administrationDate).toLocaleDateString()}
        </p>
      )}
    </div>
  ));

  return (
    <div className="m-4">
      {isLoadingOne || isLoadingTwo ? (
        <Spinner />
      ) : (
        <div className="container">
          <h2>Child Name: {child.name}</h2>
          <p>Child ID: {id.slice(-6).toUpperCase()}</p>
          <p>Date of Birth: {formattedDateOfBirth}</p>
          <p>Parent Name: {child?.userId?.name}</p>
          <div className="grid grid-cols-2 gap-4 mt-2">{immunizationCards}</div>
        </div>
      )}
    </div>
  );
}
