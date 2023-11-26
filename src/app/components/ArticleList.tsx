import { Article } from "@/types/articleType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArticleCard from "./ArticleCard";
// import ArticleCard from "./ArticleCard";
// import { Article } from "../types";

// type ArticleListProps = {
//   articles: Article[];
// };

const ArticleList = ({ articles }: { articles: Article[] }) => {
  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.id} />;
      })}
    </div>
  );
};

export default ArticleList;
