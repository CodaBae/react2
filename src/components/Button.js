const Button = ({name, isFilled}) =>{
    
return (
    <button id={isFilled ? 'fill_btn' : 'outline_btn'}>{name}</button>
)
}

export default Button