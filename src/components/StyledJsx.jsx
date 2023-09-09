export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">Yahoooo</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #392eff;
        }
        .button {
          background-color: pink;
          border: none;
          padding: 8px;
          border-radius: 8px;
          &:hover {
            background-color: red;
            color: #fff;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};