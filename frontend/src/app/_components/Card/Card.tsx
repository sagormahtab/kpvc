import React from "react";
import cardStyle from "./card.module.css";
import Image from "next/image";
import formatMoney from "@/helpers/formatMoney";

interface _ICardProps {
  title: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

export const Card = (props: _ICardProps) => {
  return (
    <div>
      {/* <Image src={props.coverImage} alt="book cover image" />
      <h4>{props.title}</h4>
      <div>
        <p>{props.discountRate}</p>
        <p>{props.price}</p>
      </div> */}
      <Image
        className={cardStyle.coverImage}
        src={"https://via.placeholder.com/350x150"}
        alt="book cover image"
        height={500}
        width={500}
      />
      <div className={cardStyle.cardContent}>
        <h4 className={cardStyle.title}>Legendary Book</h4>
        <div className={cardStyle.cardFooter}>
          <p className={cardStyle.discountRate}>10%</p>
          <p className={cardStyle.price}>{formatMoney(57600)} 원</p>
        </div>
      </div>
    </div>
  );
};
