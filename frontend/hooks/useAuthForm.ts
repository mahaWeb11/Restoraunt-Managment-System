import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";

export function useAuthForm<T extends Record<string, string>>(
  initialValues: T,
  endpoint: string,
  redirectTo: string,
) {
  const router = useRouter();

  const [form, setForm] = useState<T>(initialValues);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await apiFetch(endpoint, {
        method: "POST",
        body: JSON.stringify(form),
      });
      router.push(redirectTo);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { form, error, loading, handleChange, handleSubmit };
}
