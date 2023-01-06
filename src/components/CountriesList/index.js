import './index.css'

const CountriesList = props => {
  const {eachCountryDetails, visitSuccess} = props
  const {name, id, isVisited} = eachCountryDetails

  const isTrue = isVisited ? 'Visited' : 'Visit'

  const visited = () => {
    visitSuccess(id)
  }

  return (
    <li className="countries-list">
      <p className="name">{name}</p>

      {isVisited === true ? (
        <p className="visited-button">{isTrue}</p>
      ) : (
        <button type="button" className="visit-button" onClick={visited}>
          {isTrue}
        </button>
      )}
    </li>
  )
}

export default CountriesList
