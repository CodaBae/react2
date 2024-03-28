const Input = ({ name, isHalf, showLabel, fromPromo, handleInput }) => {
  return (
    <div id="input_container">
      {showLabel && <label>{name}</label>}
      <input
        onChange={handleInput}
        style={fromPromo && { width: "200px" }}
        type="text"
        placeholder={`Enter ${name}`}
        className={isHalf ? "half_input" : "full_half"}
      />
    </div>
  );
};

export default Input;
