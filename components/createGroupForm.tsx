"use client";

import { createGroup } from "@/lib/actions/createActions";

export default function CreateGroupForm() {
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;

    

    if (!name) {
      alert("Group name is required.");
      return;
    }

    try {
      const group = await createGroup(name);
      console.log("Group created:", group);
      alert(`Group "${group.name}" created successfully!`);
    } catch (error) {
      alert("Failed to create group.");
    }
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="name" placeholder="Group Name" />
      <button type="submit">Create Group</button>
    </form>
  );
}
