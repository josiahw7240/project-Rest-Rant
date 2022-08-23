const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/sleeping-cat.jpg" alt="Sleeping Cat" height="700" width="700" />
                <div>
                  Photo by <a href="https://unsplash.com/@modcatshop">ModCatShop</a> on <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404