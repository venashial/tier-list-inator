import gis from 'g-i-s'

// Search for images on Google
function gisPromise(...args) {
  return new Promise((resolve, reject) => {
    gis(...args, (error, results) => {
      if (error) reject(error)
      resolve(results)
    });
  })
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ query }) {
  // Pass `?term=` query from URL
  const results = await gisPromise(query.get('term'))

  if (results) {
    return {
      body: results
    }
  }
}