import './Item.css'
import { Link } from 'react-router';


function Item( props ) {

    const { id, nombre, imagen, precio,} = props;

    return (
        <div className="item-card">
            <h3 className="item-card_title"> {nombre} </h3>
            <img className="item-card_img" src={imagen} alt={nombre}></img>
            <p className="item-card_price"> ${precio} </p>
            <hr/>
            <Link to={`/detalle/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item;