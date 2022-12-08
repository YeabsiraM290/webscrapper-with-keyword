import { useEffect, useState } from "react";
import ProgressBar from "../progress_bar";

import styles from "./loading_section.module.scss";

const LoadingSection = (props: { message: string }): JSX.Element => {
  const [loadingMessage, setLoadingMessage] = useState("");
  useEffect(() => {
    setLoadingMessage(props.message);
  });

  return (
    <div>
      <p>{loadingMessage}</p>

      <div>
        <ProgressBar />
      </div>
    </div>
  );
};
export default LoadingSection;
