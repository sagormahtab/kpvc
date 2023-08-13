"use client";

import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import fetcher from "@/helpers/fetcher";
import useSWR from "swr";
import { Card } from "@/app/_components/Card";
import style from "./cards.module.css";

interface IBook {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

export const Cards = () => {
  const apiUrl = "https://kpvc-backend.onrender.com/books";
  const { data: items, isLoading, mutate } = useSWR<IBook[]>(apiUrl, fetcher);

  const fetchMoreData = async (refresh: boolean = false) => {
    const newData = await fetcher(apiUrl);
    if (Array.isArray(items) && !refresh) {
      mutate([...items, ...newData], false);
    } else {
      mutate([...newData]);
    }
  };

  const handleRefresh = () => {
    fetchMoreData(true);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <InfiniteScroll
          next={fetchMoreData}
          dataLength={Array.isArray(items) ? items.length : [].length}
          hasMore={true}
          scrollThreshold={0.8}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          refreshFunction={handleRefresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: "center" }}>
              &#8595; Pull down to refresh
            </h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
          }
        >
          <div className={style.container}>
            {Array.isArray(items) &&
              items.map((item: IBook, index: number) => (
                <Card key={index} data={item} />
              ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
