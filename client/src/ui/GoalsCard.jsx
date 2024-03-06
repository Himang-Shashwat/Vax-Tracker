export default function GoalsCard({ heading, description }) {
  return (
    <div className="flex align-center flex-col gap-2 bg-slate-400 p-3 m-3 rounded-md shadow-md">
      <h3 className="text-center">{heading}</h3>
      <p className="text-center">{description} </p>
    </div>
  );
}
