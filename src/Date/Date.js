import "./Date.scss";

const Date = (props) => {
  const month = props.time.toLocaleDateString("en-US");
  return (
    <div className="date">
      <span>{month}</span>
    </div>
  );
};

export default Date;
