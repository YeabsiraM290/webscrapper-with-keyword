import styles from "./progress_bar.module.scss";

const ProgressBar = (): JSX.Element => {
  return (
    <>
      <progress className={styles.progress}></progress>
    </>
  );
};
export default ProgressBar;
