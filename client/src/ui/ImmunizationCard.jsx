const ImmunizationCard = ({ data }) => {
  // Handle potential errors in data
  if (!data || !data.vaccineId || !data.childId) {
    return <p>Error: Missing required data in immunization record.</p>;
  }

  const scheduledDate = data.administrationDate
    ? new Date(data.administrationDate).toLocaleDateString()
    : "";

  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <h2>{data.childId.name}</h2>
      <p>Vaccine: {data.vaccineId.name}</p>
      <p>Scheduled Date: {scheduledDate}</p>
    </div>
  );
};

export default ImmunizationCard;
