import React from 'react'

import ResidentCard from './ResidentCard'

const Residents = ({currentLocation}) => {

  const arrayResidents = currentLocation?.residents.slice(0, 5)

  return (
    <section className='section_residents'>
      {
        currentLocation && (
          <h3>Dimension  Name: {currentLocation?.name}</h3>
        )
      }

      <div className='section_residents-cards'>
        {
      arrayResidents ? (
        arrayResidents.map((resident) => <ResidentCard resident={resident} key={resident}/>)
     ): <h1>Busca una Dimension</h1>
    }
      </div>
     
    {
      (arrayResidents && arrayResidents.length === 0) && (
        <article className='article_card'>
          <img className='article_card-image' src="/rick.jpg"/>
          <h1 className='article_card-data'>No hay  residentes en esta Dimension</h1>
        </article>
      )
    }
    </section>
  )
}

export default Residents