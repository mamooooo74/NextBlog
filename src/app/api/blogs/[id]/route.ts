import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

const GET = async (req: Request, res: NextApiResponse) => {
  const id = req.url.split("/api/blogs/")[1];
  // console.log(req);
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    return NextResponse.json(error);
  }
  if (!data) {
    notFound();
  }
  return NextResponse.json(data);
};

const DELETE = async (req: Request, res: NextApiResponse) => {
  const id = req.url.split("/api/blogs/")[1];
  // console.log(req);
  const { error } = await supabase.from("posts").delete().eq("id", id).single();
  if (error) {
    return NextResponse.json({ error: error.message });
  }
  return NextResponse.json({ message: "削除に成功しました。" });
};

export { GET, DELETE };
