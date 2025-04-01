import { Compteur } from "@/components/compteur";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { postsTable } from "@/db/schema";
import { Suspense, use } from "react";

async function getPost(id: number) {
  const data = await db.select().from(postsTable).where(eq(postsTable.id, id));
  if (data.length === 0) {
    return null;
  }
  console.log(data);
  return data[0];
}

function Post({
  post,
}: {
  post: Promise<{ title: string; content: string } | null>
}) {
  const postData = use(post)

  if (!postData) {
    return <div>Post not found</div>
  }

  return (
    <>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </>
  )
}

export default function Home() {
  const post = getPost(1);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Salut tout le monde !
      <Compteur />
      <Suspense fallback={<div>Loading...</div>}>
        <Post post={post} />
      </Suspense>
    </div>
  );
}
