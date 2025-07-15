let Currenttime = () => {
  let time = new Date();
  return (
    <div className="current-time">
      <p>Current Time in India {time.toLocaleDateString()}</p>
    </div>
  );
};
export default Currenttime;
