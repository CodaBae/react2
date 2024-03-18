import { useLocation, useParams } from "react-router-dom"


const ProductView = () =>{
    const {name} = useParams()
    console.log(name,'location')
    return(
        <div>
            {/* <img src={state.productItem.image}  alt="product image"/>
            <h1>{state.productItem.name}</h1>
            <h1>{state.productItem.price}</h1> */}

            <h1>{name}</h1>

        </div>
    )
}

export default ProductView