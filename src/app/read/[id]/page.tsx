const Page = async ({ params }: { params: { id: string } }) => {
  const resp = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topic = await resp.json();

  return (
    <>
      <h2>{topic.title}</h2>
      <>{topic.body}</>
    </>
  );
};

export default Page;
