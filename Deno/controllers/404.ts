export default (response: any) => {
    response.status = 404;
    response.body = { msg: "There is No Page" };
  };