import { Article } from "@/types/articleType";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <article className="flex flex-col shadow my-4">
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt=""
          width={1280}
          height={300}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link
          href={`articles/${article.id}`}
          className="text-blue-700 text-sm font-bold uppercase pb-4"
        >
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-3xl font-bold text-slate-900 hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3  text-slate-900">
          By{" "}
          <Link
            href={`articles/${article.id}`}
            className="font-semibold text-slate-900 hover:text-gray-800"
          >
            David Grzyb
          </Link>
          {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="pb-6 text-slate-900">
          {article.content.length <= 70
            ? article.content
            : `${article.content.substring(0, 70)}...`}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="uppercase text-gray-800 hover:text-black"
        >
          Continue Reading <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
