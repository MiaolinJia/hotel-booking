export default function PopUpButton({ text }: { text: string }) {
  return (
    <button
      style={{
        color: "blue",
        fontSize: "16px",
        display: "block",
        width: "100%",
      }}
    >
      {text}
    </button>
  );
}
