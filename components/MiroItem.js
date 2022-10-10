import Input from "./Input";

// item is a miro item
const MiroItem = ({ item }) => {
  return <article>
    <h3>{item.type}</h3>
    <Input onChange={console.log} id={item.id} label={item.type} placeHolder={'Update item content'}/>
    <button className="button button-primary" type="button">
       Update content
    </button>
  </article>;
};

export default MiroItem;
