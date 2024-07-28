const CompleteWelcome = () => {
  return (
    <>
      <div className="d-flex flex-column gap-4 my-5 py-3">
        {data?.map((val, key) => (
          <div key={key} className="d-flex gap-3">
            <div className="left-drop">{key + 1}</div>
            <div className="p-2 rounded border">{val}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompleteWelcome;

const data = [
  "Find the job that is right for you and once you are interested simply request to bid to be considered. This will be completely free of charge",
  "Once you are shortlisted, contact details will be exchanged and you have the ability to create a quotation. There will be a small lead fee.",
  "Once you are awarded the job, you can include this event onto your calendar/schedule and send an invoice once works completed.",
];
