import React from 'react';
import styles from './CartItem.module.scss'

export type CartItemProps = {
    title: string;
    imageUrl: string;
    price: string;
}

const CartItem = (props: CartItemProps) => {
    console.log(props.imageUrl)
    return (
            <div className={styles.cartItem}>
                <div style={{backgroundImage: props.imageUrl}}
                     className={styles.cartItemImg}>
                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">{props.title}</p>
                    <b>{props.price}</b>
                </div>
                <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="Remove"/>
            </div>
    );
};


export default CartItem;