import { Compteur } from "@/components/compteur";
import { Suspense, use } from "react";

async function getPost(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (id > 4) {
    return null;
  }
  return {
    title: "Mon premier post",
    content: "Ceci est le contenu de mon premier post.",
  };
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
  const post = getPost(3);
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
