const UserFilterControls = ({ filters, setFilters }) => {
  return (
    <div className="mb-3">
      <div>
        <input
          type="text"
          className="border-2"
          placeholder="Search..."
          onInput={(e) => {
            setFilters({
              type: "search",
              value: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default UserFilterControls;
