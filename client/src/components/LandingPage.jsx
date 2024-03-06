import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="m-4 w-[80%] mx-auto mt-8">
      <div className="relative">
        <img
          className="rounded-lg shadow-lg w-full object-left"
          src="https://firebasestorage.googleapis.com/v0/b/vaxtracker-b6576.appspot.com/o/photo-1632053001332-2268cc09f738_16x9.png?alt=media&token=07b7edec-f40a-4878-b425-17dc13e7f8ad"
          alt="VaxTracker - Child Vaccination Tracker"
        />
        <div className="absolute bottom-0 px-6 pb-8 w-full">
          <h2 className="mt-4 text-white text-4xl font-bold leading-snug">
            Your child's vaccination records, <br /> simplified!
          </h2>
          <p className="text-white text-xl mt-4 mb-8 font-semibold leading-snug">
            Track your child's immunization history with VaxTracker. Easily
            share <br /> and update your child's vaccination records with
            schools, camps, <br /> and other organizations.
          </p>
          <Link
            to={'/sign-up'}
            className="bg-slate-700 text-white px-6 py-4 font-semibold mt-2 rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="mt-12 font-bold">
        <h2 className="text-3xl">Why parents love VaxTracker</h2>
        <p className="font-light text-md mb-8">
          VaxTracker makes it easy to schedule and keep track of child's
          immunization history, so you can stay organized and informed
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4 justify-between">
          <div>
            <img
              src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-64 w-auto rounded-lg"
              alt="A mother with her baby"
            />
            <div className="mt-2">
              <p className="text-lg text-gray-800">No more paper</p>
              <p className="text-gray-500 font-medium">
                Safely store your child's vaccination records digitally
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3036405/pexels-photo-3036405.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-64 w-full rounded-lg"
              alt="A mother with her baby"
            />
            <div className="mt-2">
              <p className="text-lg text-gray-800">Easily share</p>
              <p className="text-gray-500 font-medium">
                Share your child's vaccination records with schools, camps, and
                other organizations
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-64 w-full rounded-lg"
              alt="A mother with her baby"
            />
            <div className="mt-2">
              <p className="text-lg text-gray-800">Stay up to date</p>
              <p className="text-gray-500 font-medium">
                Receive reminders when your child is due for a vaccine
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-4 items-center mb-8 bg-slate-300 py-4 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800">
          Keep your child's vaccination records up to date
        </h2>
        <p className="text-gray-800">
          Join thousands of parents using VaxTracker to track their children's
          immunization history.
        </p>
        <Link
          to={'/sign-up'}
          className="bg-slate-700 text-white px-4 py-2 font-semibold mt-2 rounded-md"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
