export default function Languages(props) {
  return (
    <div>
      <button onClick={props.onToggle}>{props.title}</button>
      <p>{props.isClicked && props.desc}</p>
    </div>
  );
}
