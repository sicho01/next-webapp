"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const Control = ({ onDelete }: ControlParams) => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const handleDelete = async (id: string) => {
    const { href, method, options } = await onDelete(id);
    router[method](href, options);
  };

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {typeof id === "string" && (
        <>
          <li>
            <Link href={`/update/${params.id}`}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => handleDelete(id)}
            />
          </li>
        </>
      )}
    </ul>
  );
};

export type ControlParams = {
  onDelete: (id: string) => Promise<{
    method: "push" | "replace";
    href: string;
    options?: any;
  }>;
};

export default Control;
