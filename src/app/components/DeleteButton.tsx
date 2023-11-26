"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = async () => {
    // await deleteArticle(id);
    const API_URL = process.env.NEXT_PUBLIC_API_URL!;
    const res = await fetch(`${API_URL}/api/blogs/${id}`, { method: "DELETE" });
    router.push("/");
    router.refresh();
  };
  return (
    <button
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5"
      onClick={handleDelete}
    >
      削除
    </button>
  );
};

export default DeleteButton;
