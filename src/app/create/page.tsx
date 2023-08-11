import Input, { InputParams } from "@/components/Input";
import { revalidatePath } from "next/cache";

const Page = () => {
  const handleSubmit: InputParams["onSubmit"] = async (
    title: string,
    body: string
  ) => {
    "use server";
    const resp = await fetch("http://localhost:9999/topics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    const topic = await resp.json();

    revalidatePath("/");
    return {
      method: "push",
      href: `/read/${topic.id}`,
    };
  };

  return (
    <Input
      title="title"
      body="body"
      button={{ label: "create" }}
      onSubmit={handleSubmit}
    />
  );
};

export default Page;
