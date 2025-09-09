import ButtonAddToCart from './ButtonAddToCart';
import ItemColorPick from './ItemColorPick';
import './Item.css'
function Item( props ) {

    const {title, img, price, hasColorPick = false } = props;

    return (
        <div className="item-card">
            <h3 className="item-card_title"> {title} </h3>
            <img className="item-card_img" src={img} alt="lapices de colores"></img>
            <p className="item-card_price"> {price} </p>
            <ButtonAddToCart/>
            <hr/>
            {hasColorPick && <ItemColorPick />}
        </div>
    )
}

export default Item;