import classes from "../components/CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>-CSS Modules-</p>
      <button className={classes.button}>Hello!!</button>
    </div>
  );
};
