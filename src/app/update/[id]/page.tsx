import Input, { InputParams } from "@/components/Input";
import { revalidatePath } from "next/cache";

const Update = async ({ params }: { params: { id: string } }) => {
  const data = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topic = await data.json();

  const handleSubmit: InputParams["onSubmit"] = async (
    title: string,
    body: string
  ) => {
    "use server";
    await fetch(`http://localhost:9999/topics/${params.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    const path = "/";
    revalidatePath(path);
    return { method: "push", href: path };
  };

  return (
    <Input
      title={topic.title}
      body={topic.body}
      button={{ label: "update" }}
      onSubmit={handleSubmit}
    />
  );
};

export default Update;
