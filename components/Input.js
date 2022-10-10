const Input = ({ id, label, placeHolder, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input className="input" type="text" placeholder={placeHolder} id={id} onChange={(ev) => onChange(ev.target.value)}/>
    </div>
  );
};

export default Input;
