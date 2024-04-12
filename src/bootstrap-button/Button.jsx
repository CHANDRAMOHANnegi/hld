const colors = {
  primary: "green",
  danger: "red",
  warning: "orange",
};

export default function Button({ text, type = "primary", mode = "solid" }) {
  const color = colors[type];

  const modes = {
    outline: { border: `1px solid ${color}`, color },
    text: { color },
    solid: { backgroundColor: color },
  };

  const style = { ...modes[mode] };

  return (
    <div className="w-200 h-60" style={style}>
      {text}
    </div>
  );
}
