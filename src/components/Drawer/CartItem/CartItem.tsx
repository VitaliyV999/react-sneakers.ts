import React from 'react';
import styles from './CartItem.module.scss'

export type CartItemProps = {
    title: string;
    imageUrl: string;
    price: string;
}

const CartItem = (props: CartItemProps) => {
    return (
            <div className={styles.cartItem}>
                <img src={props.imageUrl} className={styles.cartItemImg} alt="Sneakers"/>
                <div className="mr-20 flex">
                    <p className="mb-5">{props.title}</p>
                    <b>{props.price}</b>
                </div>
                <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
            </div>
    );
};


export default CartItem;