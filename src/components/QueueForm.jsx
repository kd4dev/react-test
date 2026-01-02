import { useState } from "react";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;

    onAdd({ name, service });
    setName("");
    setService("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-zinc-900 p-6 shadow-xl w-[360px]"
    >
      <h2 className="mb-5 text-xl font-semibold text-indigo-400">
        Add to Queue
      </h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Customer Name"
        className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
      />

      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="mb-6 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
      >
        <option value="">Select Service</option>
        <option value="Payment">Payment</option>
        <option value="Consultation">Consultation</option>
        <option value="Support">Support</option>
      </select>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-500 py-3 font-medium text-white"
      >
        Add Customer
      </button>
    </form>
  );
}
