import axios from 'axios';
import { useEffect, useState } from 'react';
import StyledMain from './styledComponents/Smain';

function Main() {
  const [meds, setMeds] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5051/medication`).then(({ data }) => {
      setMeds(data);
    });
  }, []);

  const [inputNewMed, setInputNewMed] = useState('');
  const handleChangeMed = (evt) => {
    setInputNewMed(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const dataToSend = {
      name: inputNewMed,
    };
    axios.post(`http://localhost:5051/medication`, dataToSend);
  };
  return (
    <StyledMain>
      <div className='main'>
        <h2>Ajouter un médicament</h2>
        <form className='new-member-form' onSubmit={handleSubmit}>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Paracétamol'
            value={inputNewMed}
            onChange={handleChangeMed}
          />
          <button type='submit'>Envoyer</button>
        </form>

        <h2>Listes des médicaments</h2>
        <ul className='member-list'>
          {meds.map((med) => {
            return (
              <li className='member' key={med.id}>
                {med.name} {med.expiration}
              </li>
            );
          })}
        </ul>
      </div>
    </StyledMain>
  );
}

export default Main;
