import { notFound } from "next/navigation";
import { Article } from "./types/articleType";

const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const articles = await res.json();
  return articles;
};

const getArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    cache: "no-store",
  });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const article = await res.json();
  return article;
};

const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newArticle = await res.json();
  return newArticle;
};

const deleteArticle = async (id: string) => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const deleteArticle = await res.json();
  return deleteArticle;
};

export { getAllArticles, getArticle, createArticle, deleteArticle };
