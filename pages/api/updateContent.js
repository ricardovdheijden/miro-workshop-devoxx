import axios from "axios";

export default function handler(req, res) {
  const body = JSON.parse(req.body)
  const url = `https://api.miro.com/v2/boards/${process.env.boardId}/${body.type}s/${body.item_id}`

  const token = req.cookies.miro_access_token;
  const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const payload = {
    data: {
      content: body.content
    }
  }

  axios.patch(url, payload, {headers})
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.status(500).json({ message: error.message })
    })
}
