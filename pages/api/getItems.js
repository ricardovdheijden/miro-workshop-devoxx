import axios from "axios";

export default function handler(req, res) {
  const url = `https://api.miro.com/v2/boards/${process.env.boardId}/items?limit=10&type=shape&type=sticky_note&type=text`

  const token = req.cookies.miro_access_token;
  const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  axios.get(url, {headers}).then(response => {
    console.log({response})
    res.json(response.data)
  }).catch(error => {
    console.log(error.response.data)
    res.status(500).json()
  })
}
