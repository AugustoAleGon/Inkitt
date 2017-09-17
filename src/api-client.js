/**
  Fetching the data from the api with Api client
*/
const URL = 'https://cap_america.inkitt.de/1/stories/106766/chapters/1'

// Method for getting the textBook

function getTextBook() {
  return fetch(URL)
  .then(response => response.json())
  .then(data => data.response)
  .then(response => {
    return {
      title: response.name,
      textBook: response.text
    }
  })
}

export { getTextBook }
