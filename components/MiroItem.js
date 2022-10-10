import Input from "./Input";
import {useState} from "react";

// item is a miro item
const MiroItem = ({ item }) => {
  const [value, setValue] = useState('');

  function updateContent() {
    fetch('api/authenticate')
      .then(res => res.json())
      .then(result => {
          if (result.authenticated) {
            fetch('api/updateContent', {
              method: 'PATCH',
              body: JSON.stringify({
                item_id: item.id,
                type: item.type,
                content: value
              })
            })
          }
      })
  }

  return <article>
    <h3>{item.type}</h3>
    <Input
      onChange={(value) => setValue(value)}
      id={item.id} label={item.type} placeHolder={'Update item content'}/>
    <button className="button button-primary" type="button" onClick={() => updateContent()}>
       Update content
    </button>
  </article>;
};

export default MiroItem;
