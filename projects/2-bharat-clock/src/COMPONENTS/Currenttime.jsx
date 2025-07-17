let Currenttime = () => {
  let time = new Date();
  return (
    <div className="current-time">
      <p className="lead">
        Current Time in india {time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};
export default Currenttime;
