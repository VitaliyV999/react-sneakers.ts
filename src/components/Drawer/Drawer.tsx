import React from 'react';
import CartItem from "./CartItem/CartItem";
import styles from "./Drawer.module.scss";
import {Item} from "../../pages/Shop";

type DrawerProps = {
    onClickCart: () => void;
    items: Item[];

}

const Drawer = (props: DrawerProps) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="d-flex justify-between mb-25">Корзина<button className={styles.closeBtn}><img onClick={props.onClickCart}
                                                                                  src="/img/btn-close.svg" alt="Close"/></button></h2>
                <div className={styles.items}>
                    {props.items.map((obj) => <CartItem price={obj.price} title={obj.title} imageUrl={obj.imageUrl} />)}
                </div>
                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>98$</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div className={styles.nalogDashed}></div>
                            <b>4,9$</b>
                        </li>
                    </ul>
                    <button className={styles.greenButton}>Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;