const Input = ({name, handle, isHalf}) =>{
    return(
        <div id="input_container">
            <label>{name}</label>
            <input type="text" placeholder={`Enter ${name}`} className={isHalf ? 'half_input' : 'full_half'} />
        </div>
    )
}

export default Input