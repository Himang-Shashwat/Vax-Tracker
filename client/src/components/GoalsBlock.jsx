export default function GoalsBlock() {
  return (
    <div className="mt-2">
      <h2 className="text-2xl">Our Goals</h2>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h3>Routine Vaccination:</h3>
          <p>
            When the time comes for your child to get his or her vaccines, here
            are some useful tips about what to expect and how you can prepare
          </p>
        </div>
        <div>
          <div className="flex gap-2">
            <h3>Before, During and after Shots: </h3>
            <p>
              Read vaccine materials you received from your child's healthcare
              professional and write down any questions you may have!
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <h3>Vaccines When Your Child is Sick: </h3>
            <p>
              Children can still get vaccines even with a fever or mild illness
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
