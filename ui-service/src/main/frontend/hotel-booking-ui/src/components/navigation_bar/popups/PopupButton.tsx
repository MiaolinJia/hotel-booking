export default function PopUpButton({
  text,
  backGroundColor,
  textColor,
}: {
  text: string;
  backGroundColor: string;
  textColor: string;
}) {
  return (
    <button
      style={{
        backgroundColor: backGroundColor,
        color: textColor,
        display: "block",
        width: "100%",
        marginBottom: "0.5em",
        fontWeight: "700",
        marginTop: "8px",
        textAlign: "center",
        borderRadius: "999px",
        lineHeight: "1.4",
      }}
    >
      {text}
    </button>
  );
}
