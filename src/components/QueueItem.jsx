export default function QueueItem({id,userName,service,status,onUpdateStatus,onRemove,}) {

 let nextStatus;
 let statusTextColor;
 let buttonColor;

if (status === "waiting") {
  nextStatus = "serving";
  statusTextColor = "text-yellow-400";
  buttonColor = "bg-yellow-500 hover:bg-yellow-600 text-black";
}
 else if (status === "serving") {
  nextStatus = "completed";
  statusTextColor = "text-green-400";
  buttonColor = "bg-green-500 hover:bg-green-600 text-white";
} 
else {
  nextStatus = status;
  statusTextColor = "text-blue-400";
  buttonColor = "bg-blue-500 text-white";
}

  return (
    <div className="flex items-center justify-between rounded-xl bg-zinc-800 p-5">
      <div>
        <h3 className="text-lg font-semibold text-white">{userName}</h3>
        <p className="text-sm text-zinc-400">Service: {service}</p>

        <span className={`text-sm font-medium ${statusTextColor}`}>
          {status}
        </span>
      </div>

      <div className="flex items-center gap-3">
        {status !== "completed" && (
          <button
            onClick={() => onUpdateStatus(id, nextStatus)}
            className={`rounded-md px-4 py-2 text-sm ${buttonColor}`}
          >
            {status === "waiting" ? "Serve" : "Complete"}
          </button>
        )}

        <button
          onClick={() => onRemove(id)}
          className="rounded-md bg-black p-2 text-white"
        >
          ❌
        </button>
      </div>
    </div>
  );
}
