import QueueItem from "./QueueItem";

export default function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  return (
    <div className="flex-1 w-full rounded-2xl bg-zinc-900 p-6 shadow-xl">
      <h2 className="mb-6 text-xl font-semibold text-white">Current Queue</h2>

      {queue.length === 0 ? (
        <p className="text-zinc-400">No customers in queue</p>
      ) : (
        <div className="space-y-4">
          {queue.map((customer) => (
            <QueueItem
              key={customer.id}
              id={customer.id}
              userName={customer.name}
              service={customer.service}
              status={customer.status}
              onUpdateStatus={onUpdateStatus}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
}
