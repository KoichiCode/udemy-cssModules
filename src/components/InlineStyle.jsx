export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "cemter"
  };
  const titleStyle = {
    margin: 0,
    color: "#392eff"
  };
  const buttonStyle = {
    backgroundColor: "pink",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-InlineStyles-</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
