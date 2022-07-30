import React, { useState } from "react";

function Box({ content, boxText }: { content: string; boxText: string }) {
  const [contentToDisplay, setContentToDisplay] = useState("");

  const handleClick = () => {
    if (!contentToDisplay) {
      setContentToDisplay(content);
    }
  };
  return (
    <div style={styles.box}>
      <button onClick={handleClick}>{boxText}</button>
      {contentToDisplay && <h2>{contentToDisplay}</h2>}
    </div>
  );
}

function App() {
  return (
    <div style={styles.container}>
      <Box boxText="click box one" content="first box" />
      <Box boxText="click box two" content="second box" />
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    marginRight: "20px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    padding: "20px",
  },
};

export default App;
