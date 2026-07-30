import { useState } from "react";

export function useApiForm<T extends Record<string, any>>(
  initialValues: T,
  submitFn: (data: T) => Promise<any>,
  onSuccess?: (result: any) => void,
) {
  const [form, setForm] = useState<T>(initialValues);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await submitFn(form);
      setForm(initialValues);
      onSuccess?.(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { form, error, loading, handleChange, handleSubmit };
}
