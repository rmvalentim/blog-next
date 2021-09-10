export default async function handler(req, res) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => res.status(200).send(json))
}