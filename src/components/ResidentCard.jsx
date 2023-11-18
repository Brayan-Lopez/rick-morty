import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from './Modal';

const ResidentCard = ({resident}) => {

  const [dataResident, setDataResident] = useState()
  const [showForm, setShowForm] = useState(false)

  const closeModal = () => {
    setShowForm(!showForm)
  }

  const episodes = dataResident?.episode.slice(0, 2)

  useEffect(()=>{
    const URL = resident
    axios.get(URL)
    .then(({data}) => setDataResident(data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <article className='article_card' onClick={closeModal}>
      <img className='article_card-image' src={`${dataResident?.image}`} />
      <ul className='article_card-data'>
        <li>Name: {dataResident?.name}</li>
        <li>Status: {dataResident?.status}</li>
        <li>Specie: {dataResident?.species}</li>
        <li>Residence dimesion: {dataResident?.origin.name}</li>
        {
          episodes && (
            episodes.map(element => <li key={element.index}>Link to episode:  {element}</li>)
            )
        }
      </ul>

      <Modal showForm={showForm}
        closeModal={closeModal}
        dataResident={dataResident}
      />

    </article>
  )
}

export default ResidentCard