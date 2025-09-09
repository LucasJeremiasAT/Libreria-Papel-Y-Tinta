import Item from './Item'
import LapizImg from '../assets/lapiz.png'
import GomaImg from '../assets/goma.png'
import LapicesColoresImg from '../assets/lapices-de-colores.jpg'
import LapiceraImg from '../assets/lapicera.jpg'
import CorrectorImg from '../assets/corrector.jpg'
import Regla15CmImg from '../assets/regla15cm.jpg'
import CuadernoImg from '../assets/cuaderno.jpg'
import CartucheraImg from '../assets/cartuchera.jpg'
import MochilaImg from '../assets/mochila.jpg'

function ItemListContainer({ greeting }) {
    return (
        <section>
            <h2>{greeting}</h2>
            <div className="card-contain">
                <Item title="Lapiz" price="$800" img={LapizImg}/>
                <Item title="Goma" price="$500" img={GomaImg}/>
                <Item title="Lápices de colores" price="$3800" img={LapicesColoresImg}/>
                <Item title="Lapicera" price="$1900" img={LapiceraImg}/>
                <Item title="Corrector" price="$2500" img={CorrectorImg}/>
                <Item title="Regla 15cm" price="$700" img={Regla15CmImg} hasColorPick={true}/>
                <Item title="Cuaderno" price="$8900" img={CuadernoImg}/>
                <Item title="Cartuchera" price="$7000" img={CartucheraImg} hasColorPick={true}/>
                <Item title="Mochila" price="$25000" img={MochilaImg} hasColorPick={true}/>
            </div>
        </section>
    )
}

export default ItemListContainer