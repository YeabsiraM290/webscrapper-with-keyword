import axios from "axios";
import env from "../constants/env";
import ResultModel from "../models/data_model";

const send_search_data = async (keyterm: string) => {
  try {
    let response = await axios({
      method: "get",
      url: "http://127.0.0.1:8000/search/".concat(keyterm),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = JSON.parse(await response.data);
    let converted_data: ResultModel[] = [];
    data["results"].forEach((element: any) => {
      converted_data.push(new ResultModel(element.name, element.url, element.email, element.phone));
    });
    
    return converted_data;
  } catch (e: any) {
    console.log("error");
    return e;
  }
};

export default send_search_data;
