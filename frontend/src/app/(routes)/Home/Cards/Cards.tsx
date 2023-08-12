import { Card } from "@/app/_components/Card";
import React from "react";
import style from "./cards.module.css";

export const Cards = () => {
  return (
    <div className={style.container}>
      {[1, 2, 3].map((item) => (
        <Card />
      ))}
    </div>
  );
};
