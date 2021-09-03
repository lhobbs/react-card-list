/**
 * This will get the list of creators
 */
const getCreators = () => {
  return fetch('https://api.hellosaurus.com/marketing/creators')
    .then(response => response.json())
}

export { getCreators }