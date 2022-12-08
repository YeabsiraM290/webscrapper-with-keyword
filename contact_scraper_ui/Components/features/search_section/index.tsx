import { useState } from "react";
import Select from "react-select";
import WelcomeSection from "../welcome_section";
import LoadingSection from "../../shared/loading_section";

import styles from "./search_section.module.scss";
import Result from "../result";
import ResultModel from "../../../models/data_model";
import send_search_data from "../../../services/search_request";

const SearchSection = (): JSX.Element => {
  const [excludedDomains, setExcludedDomains] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [data, setData] = useState<Array<ResultModel>>();
  const [dataFetched, setDataFetched] = useState<boolean>(false);
  const [keyTerm, setKeyTerm] = useState<string>("");

  const excludedDomainsOptions = [
    { value: ".com", label: ".com" },
    { value: ".et", label: ".et" },
    { value: ".info", label: ".info" },
    { value: ".tx", label: ".tx" },
    { value: ".dev", label: ".dev" },
  ];

  const handleExcludedDomainChange = async (
    selected: any,
    selectaction: { action: any }
  ) => {
    const { action } = selectaction;

    setExcludedDomains(selected);
  };

  const handleKeyterm = (e: any) => {
    
      setKeyTerm(e.target.value);
 
  };

  const handleSubmit = async () => {
    if (keyTerm) {
      setLoading(true);
      setLoadingMessage("Collecting urls....");
      var data = await send_search_data(keyTerm);
      console.log(data)
      setData(data);
      setDataFetched(true);
      
    }
  };

  return loading ? (
    <div className={styles.mainCon}>
      <LoadingSection message={loadingMessage} />
    </div>
  ) : dataFetched ? (
    <Result data={data} />
  ) : (
    <div className={styles.mainCon}>
      <WelcomeSection />
      <div className={styles.searchInput}>
        <div className={styles.inputFieldsCon}>
          <input
            className={styles.searchField}
            placeholder="Enter keyword"
            onChange={handleKeyterm}
            value= {keyTerm}
          />

          <input
            className={styles.siteAmountForm}
            type="number"
            name="urlAmount"
            placeholder="Number of sites to scrape"
          />
        </div>
        <div className={styles.filters}>
          <div>
            <label htmlFor="exludedDomains" className={styles.label}>
              Excluded domains
            </label>
            <br />
            <Select
              className={styles.excludedDomainsSelect}
              name="exludedDomains"
              id="selectexludedDomains"
              instanceId="selectExludedDomains"
              isMulti
              options={excludedDomainsOptions}
              onChange={handleExcludedDomainChange}
            />
          </div>
        </div>
        <button className={styles.searchBtn} onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchSection;
