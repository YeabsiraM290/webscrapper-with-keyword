class ResultModel {
  name: string;
  url: string;
  email: Array<string>;
  phone: Array<number>;

  constructor(
    name: string,
    url: string,
    email: Array<string>,
    phone: Array<number>
  ) {
    this.name = name;
    this.url = url;
    this.email = email;
    this.phone = phone;
  }
}

export default ResultModel;
