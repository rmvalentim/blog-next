export default async function handler(req, res) {
    const { id } = req.query

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => res.status(200).send(json))
}