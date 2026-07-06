"use client";

import { toast } from "sonner";

export default function CopyButton() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("adebayo@gmail.com");

    toast.success("Email copied successfully!");
  };
}
