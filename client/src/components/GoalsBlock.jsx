import GoalsCard from '../ui/GoalsCard';

export default function GoalsBlock() {
  const goals = [
    {
      heading: 'Routine Vaccination',
      description:
        ' When the time comes for your child to get his or her vaccines, here are some useful tips about what to expect and how you can prepare',
    },
    {
      heading: 'Before, During and after Shots',
      description:
        "Read vaccine materials you received from your child's healthcare professional and write down any questions you may have!",
    },
    {
      heading: 'Vaccines When Your Child is Sick',
      description:
        'Children can still get vaccines even with a fever or mild illness',
    },
  ];
  return (
    <div className="mt-2">
      <h2 className="text-2xl">Our Goals</h2>
      <div className="grid grid-cols-3">
        {goals.map((goal) => (
          <GoalsCard heading={goal.heading} description={goal.description} />
        ))}
      </div>
    </div>
  );
}
