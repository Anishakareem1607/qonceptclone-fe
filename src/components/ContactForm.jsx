
import { useState, useEffect } from "react";

export default function ContactForm({
  onSubmit,
  initial = { name: "", email: "", phone: "" },
  submitLabel = "Save",
}) {
  const [form, setForm] = useState(initial);


  useEffect(() => {
    setForm(initial);
  }, [initial]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Name and Email are required");
      return;
    }
    onSubmit(form); 
    setForm({ name: "", email: "", phone: "" }); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
