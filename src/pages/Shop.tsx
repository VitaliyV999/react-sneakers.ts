import Card from "../components/Card/Card";
import Header from "../components/Header";
import Drawer from "../components/Drawer/Drawer";
import {useState, useEffect} from "react";

export type Item = {
    title: string;
    price: string;
    imageUrl: string;
    id: string;
}

function Shop() {
    const [items, setItems] = useState<Item[]>([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState<Item[]>([]);

    function deleteCartItem(id: string) {

    }

    useEffect(() => {
        fetch('https://640e020eb07afc3b0dbc8f12.mockapi.io/items').then(res => {
            return res.json();
        }).then(json => {
            setItems(json)
        })
    }, []);

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClickCart = {() => setCartOpened(false)} items={cartItems} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            addCartItem={() => setCartItems([...cartItems, obj])}
                        />
                    ))}
                </div>
                <button className='arrowUpBtn' onClick={() => window.scroll(0,0) }>
                    <img className='arrowUp' src="/img/arrowUp.svg" alt="up"/>
                </button>
            </div>
        </div>
    );
}

export default Shop;
