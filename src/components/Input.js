const Input = ({name, handle, isHalf, showLabel, fromPromo}) =>{
    return(
        <div id="input_container">
           {showLabel && <label>{name}</label> }
            <input style={fromPromo && {width:'200px'}} type="text" placeholder={`Enter ${name}`} className={isHalf ? 'half_input' : 'full_half'} />
        </div>
    )
}

export default Input