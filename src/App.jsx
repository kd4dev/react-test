import { useState } from "react";

import Header from "./components/Header.jsx";
import QueueForm from "./components/QueueForm.jsx";
import QueueDisplay from "./components/QueueDisplay.jsx";

export default function App() {
  const [queue, setQueue] = useState([]);
  
  const addToQueue = (customer) => {
    setQueue((prev) => [
      ...prev,
      { ...customer, id: Date.now(), status: "waiting" },
    ]);
  };
  
  const updateStatus = (id, newStatus) => {
    setQueue((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
  );
};

const removeFromQueue = (id) => {
  setQueue((prev) => prev.filter((c) => c.id !== id));
};

  return (
    <div className="min-h-screen bg-black px-6 sm:px-8 md:px-12 pt-10">
      <Header />

      {/* Stack on small screens, side-by-side on md and up */}
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </div>
    </div>
  );
}

// React objects ko deep compare nahi karta, sirf reference dekhta hai.
// isi liye ye sab lafda krna pdta he non-primitive ,agar