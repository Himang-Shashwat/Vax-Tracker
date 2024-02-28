// // import { useEffect, useState } from "react";
// // import { useSelector } from "react-redux";
// // import axios from "axios";
// // import ImmunizationCard from "../../ui/ImmunizationCard";
// // import Spinner from "../../ui/Spinner";

// // export default function HospitalDashboard() {
// //   const { currentUser } = useSelector((state) => state.user);
// //   const [immunizations, setImmunizations] = useState([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [currentStatusFilter, setCurrentStatusFilter] = useState("all");

// //   useEffect(() => {
// //     fetchImmunizations();
// //   }, []);

// //   const fetchImmunizations = () => {
// //     setIsLoading(true);
// //     axios
// //       .get("http://localhost:3000/api/v1/immunizations", {
// //         withCredentials: true,
// //       })
// //       .then((data) => {
// //         setImmunizations(data.data.data);
// //         setIsLoading(false);
// //       })
// //       .catch((err) => {
// //         setIsLoading(false);
// //       });
// //   };

// //   const onUpdate = () => {
// //     fetchImmunizations();
// //   };

// //   const filteredImmunizations = immunizations
// //     .filter((record) =>
// //       record.childId.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     .filter((record) =>
// //       currentStatusFilter === "all"
// //         ? true
// //         : record.currentStatus === currentStatusFilter
// //     );

// //   return (
// //     <div className="p-4">
// //       <h1 className="text-3xl">Welcome Back, {currentUser.name}</h1>
// //       <input
// //         type="text"
// //         placeholder="Search by Child Name"
// //         value={searchQuery}
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //         className="my-2 p-2 border border-gray-300 rounded-md"
// //       />
// //       <select
// //         value={currentStatusFilter}
// //         onChange={(e) => setCurrentStatusFilter(e.target.value)}
// //         className="my-2 p-2 border border-gray-300 rounded-md"
// //       >
// //         <option value="all">All</option>
// //         <option value="scheduled">Scheduled</option>
// //         <option value="completed">Completed</option>
// //       </select>
// //       {isLoading ? (
// //         <Spinner />
// //       ) : (
// //         <>
// //           <div className="mt-2 grid grid-cols-2 gap-4">
// //             {filteredImmunizations.length > 0 ? (
// //               filteredImmunizations.map((record) => (
// //                 <ImmunizationCard
// //                   key={record._id}
// //                   data={record}
// //                   onUpdate={onUpdate}
// //                 />
// //               ))
// //             ) : (
// //               <p>No scheduled vaccinations found.</p>
// //             )}
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import ImmunizationCard from "../../ui/ImmunizationCard";
// import Spinner from "../../ui/Spinner";

// export default function HospitalDashboard() {
//   const { currentUser } = useSelector((state) => state.user);
//   const [immunizations, setImmunizations] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentStatusFilter, setCurrentStatusFilter] = useState("all");

//   useEffect(() => {
//     fetchImmunizations();
//   }, []);

//   const fetchImmunizations = () => {
//     setIsLoading(true);
//     axios
//       .get("http://localhost:3000/api/v1/immunizations", {
//         withCredentials: true,
//       })
//       .then((data) => {
//         setImmunizations(data.data.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//       });
//   };

//   const onUpdate = () => {
//     fetchImmunizations();
//   };

//   const handleReset = () => {
//     setSearchQuery("");
//     setCurrentStatusFilter("all");
//   };

//   const filteredImmunizations = immunizations
//     .filter((record) =>
//       record.childId.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     .filter((record) =>
//       currentStatusFilter === "all"
//         ? true
//         : record.currentStatus === currentStatusFilter
//     );

//   return (
//     <div className="p-4">
//       <h1 className="text-3xl">Welcome Back, {currentUser.name}</h1>
//       <input
//         type="text"
//         placeholder="Search by Child Name"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="my-2 p-2 border border-gray-300 rounded-md"
//       />
//       <select
//         value={currentStatusFilter}
//         onChange={(e) => setCurrentStatusFilter(e.target.value)}
//         className="my-2 p-2 border border-gray-300 rounded-md"
//       >
//         <option value="all">All</option>
//         <option value="scheduled">Scheduled</option>
//         <option value="completed">Completed</option>
//       </select>
//       <button onClick={handleReset} className="my-2 p-2 bg-gray-200 rounded-md">
//         Reset
//       </button>
//       {isLoading ? (
//         <Spinner />
//       ) : (
//         <>
//           <div className="mt-2 grid grid-cols-2 gap-4">
//             {filteredImmunizations.length > 0 ? (
//               filteredImmunizations.map((record) => (
//                 <ImmunizationCard
//                   key={record._id}
//                   data={record}
//                   onUpdate={onUpdate}
//                 />
//               ))
//             ) : (
//               <p>No vaccinations found.</p>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
// HospitalDashboard.js
// HospitalDashboard.js
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ImmunizationCard from "../../ui/ImmunizationCard";
import Spinner from "../../ui/Spinner";
import SearchFilterReset from "../../ui/SearchFilterReset";

export default function HospitalDashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const [immunizations, setImmunizations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStatusFilter, setCurrentStatusFilter] = useState("all");

  useEffect(() => {
    fetchImmunizations();
  }, []);

  const fetchImmunizations = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:3000/api/v1/immunizations", {
        withCredentials: true,
      })
      .then((data) => {
        setImmunizations(data.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const onUpdate = () => {
    fetchImmunizations();
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleFilter = (value) => {
    setCurrentStatusFilter(value);
  };

  const handleReset = () => {
    setSearchQuery("");
    setCurrentStatusFilter("all");
  };

  const filteredImmunizations = immunizations
    .filter((record) =>
      record.childId.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((record) =>
      currentStatusFilter === "all"
        ? true
        : record.currentStatus === currentStatusFilter
    );

  return (
    <div className="p-4">
      <h1 className="text-3xl">Welcome Back, {currentUser.name}</h1>
      <SearchFilterReset
        onSearch={handleSearch}
        onFilter={handleFilter}
        onReset={handleReset}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {filteredImmunizations.length > 0 ? (
              filteredImmunizations.map((record) => (
                <ImmunizationCard
                  key={record._id}
                  data={record}
                  onUpdate={onUpdate}
                />
              ))
            ) : (
              <p>No vaccinations found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
