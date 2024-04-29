const SearchFilterReset = ({ onSearch, onFilter, onReset }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Search by Child Name"
        onChange={(e) => onSearch(e.target.value)}
        className="my-2 p-2 border border-gray-300 rounded-md"
      />
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="my-2 p-2 border border-gray-300 rounded-md"
      >
        <option value="all">All</option>
        <option value="scheduled">Scheduled</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={onReset} className="my-2 p-2 bg-gray-200 rounded-md">
        Reset
      </button>
    </div>
  );
};

export default SearchFilterReset;
