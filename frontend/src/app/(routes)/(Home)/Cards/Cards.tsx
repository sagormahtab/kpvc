"use client";

import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import fetcher from "@/helpers/fetcher";
import useSWR from "swr";
import { Card } from "@/app/_components/Card";
import style from "./cards.module.css";

export const Cards = () => {
  const apiUrl = "https://kpvc-backend.onrender.com/books";
  const { data: items, error, isLoading, mutate } = useSWR(apiUrl, fetcher);

  const fetchMoreData = async () => {
    const newData = await fetcher(apiUrl);
    mutate([...items, ...newData], false);
  };

  const handleRefresh = () => {
    mutate([]);
    fetchMoreData();
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <InfiniteScroll
          next={fetchMoreData}
          dataLength={items.length}
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
            {items.map((item: Object, index: number) => (
              <Card key={index} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
