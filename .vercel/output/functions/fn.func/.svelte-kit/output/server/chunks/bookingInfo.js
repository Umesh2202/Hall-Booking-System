const convertSecToDate = (data) => {
  const info = [];
  info.pop();
  for (let i = 0; i < data.length; i++) {
    const stSec = data[i].startDate.seconds;
    let date = new Date(1970, 0, 1);
    date.setSeconds(JSON.parse(stSec));
    const startDate = date.toLocaleDateString();
    const edSec = data[i].endDate.seconds;
    date = new Date(1970, 0, 1);
    date.setSeconds(JSON.parse(edSec));
    const endDate = date.toLocaleDateString();
    info.push({
      eventName: data[i].eventName,
      startDate,
      endDate,
      userId: data[i].userId
    });
  }
  return info;
};
export {
  convertSecToDate as c
};
