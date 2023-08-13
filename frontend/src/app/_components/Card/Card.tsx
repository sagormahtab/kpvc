import React from "react";
import cardStyle from "./card.module.css";
import Image from "next/image";
import formatMoney from "@/helpers/formatMoney";

interface _ICardProps {
  data: {
    title: string;
    discountRate: number;
    coverImage: string;
    price: number;
  };
}

export const Card = (props: _ICardProps) => {
  return (
    <div>
      <Image
        className={cardStyle.coverImage}
        src={props.data.coverImage}
        alt="book cover image"
        height={500}
        width={500}
      />
      <div className={cardStyle.cardContent}>
        <h4 className={cardStyle.title}>{props.data.title}</h4>
        <div className={cardStyle.cardFooter}>
          <p className={cardStyle.discountRate}>{props.data.discountRate}</p>
          <p className={cardStyle.price}>{formatMoney(props.data.price)} 원</p>
        </div>
      </div>
    </div>
  );
};
