import { useEffect, useState } from "react";
import styles from "./result.module.scss";
import ResultModel from "../../../models/data_model";

const Result = (props: { data: any}): JSX.Element => {
    const [data, setData] = useState<Array<ResultModel>>();
    useEffect(() => {
      if(props.data.length != 0){
          setData(props.data);
      }
    });

  return (
    <div className={styles.resultCon}>
    {data ?   <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>URL</th>
            <th className={styles.th}>Possible emails</th>
            <th className={styles.th}>Possible phone numbers</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
        
          {data.map(function (object, key){
              return <>
                <tr className={styles.tr} key={key}>
            <td className={styles.td} data-column="Name">
              {object.name}
            </td>
            <td className={styles.td} data-column="URL">
              {object.url}
            </td>
            <td className={styles.td} data-column="Email">
              {object.email.toString()}
            </td>
            <td className={styles.td} data-column="Phone">
              <p>
                {object.phone.toString()}
              </p>
            </td>
          </tr></>
          })}
        </tbody>
      </table> : <>No result found</>}
    </div>
  );
};
export default Result;
