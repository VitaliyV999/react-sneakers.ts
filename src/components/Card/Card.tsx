import React, {useState} from 'react';
import styles from './Card.module.scss';
import CartItem from "../Drawer/CartItem/CartItem";

type CardProps = {
    onClickFavourite: () => void;
    title: string;
    imageUrl: string;
    price: string;
}

const Card = (props: CardProps) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }

    const onClickHeart = () => {
        setIsFavourite(!isFavourite)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favourite} onClick={props.onClickFavourite}>
                <button className={styles.heartUnliked} onClick={onClickHeart}><img src={isFavourite ? "/img/heart-liked.svg" : "/img/heart-unliked.png"} alt="Unliked"/></button>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column align-center">
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    );
};

export default Card;