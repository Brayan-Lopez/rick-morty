import React from 'react'

const Form = ({textLocation, handleChange, arrayAllLocation, handleEndpoint}) => {

  return (
    <section className='section_form'>

      <input className='section_form-input' type="text" value={textLocation}  onChange={handleChange} placeholder='Search Dimension Name'  />
      <div className={`${textLocation?"section_form-list":"invicible"}`}>
        {
          textLocation && (<ul>
            {
              arrayAllLocation?.results.map((endpoint) => (
                <li key={endpoint?.id} onClick={() => handleEndpoint(endpoint?.url)}>
                  {endpoint?.name}
                </li>
                ))
            }
          </ul>)
        }
      </div>
      
    </section>
  )
}

export default Form