const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormated = data.places.map ( (place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}></img>
        </div>
      )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormated}
            </main>
        </Def>
    )
}

module.exports = index