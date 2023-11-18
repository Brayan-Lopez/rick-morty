import React from 'react'

const Modal = ({showForm, closeModal, dataResident}) => {
  return (
    <section className={`modal ${showForm?"visible":"invicible"}`}>

      <article className='modal_article'>
        <h3>{dataResident?.name}</h3>
        <img className='modal_image' src={`${dataResident?.image}`} alt="" />
        <ul className='modal_list'>
          <li>Status: {dataResident?.status}</li>
          <li>Specie: {dataResident?.species}</li>
          <li>Residence dimension: {dataResident?.origin.name}</li>
          <li>Creation date: {dataResident?.created}</li>
        </ul>
        <h3>episodes:</h3>
        <ul className='modal_list'>
          {
            dataResident?.episode && (
              dataResident?.episode.map((element) => <li>{element}</li>)
            )
          }
        </ul>
      </article>

    </section>
  )
}

export default Modal