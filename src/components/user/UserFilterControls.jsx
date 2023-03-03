const UserFilterControls = ({ filters, setFilters, showDialog }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-start">
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
        <div>
          <div className="bullet-btn" onClick={() => {showDialog()}}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFilterControls;
