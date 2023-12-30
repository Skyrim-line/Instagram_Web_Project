// 2023-08-19T11:54:19.786Z
// YYYY-MM-DD HH:MM:SS
const addZero = (num) => {
  return num < 10 ? `0${num}` : num;
};
const convertDate = (date) => {
  console.log("date", date);
  const dt = new Date(date);
  console.log("dt", dt);
  const year = dt.getFullYear();
  const month = addZero(dt.getMonth() + 1); //7
  const d = addZero(dt.getDate());
  const hh = addZero(dt.getHours());
  const mm = addZero(dt.getMinutes());
  const ss = addZero(dt.getSeconds());
  const result = `${year}-${month}-${d} ${hh}:${mm}:${ss}`;
  console.log(result); //2023-08-19 22:02:11
  return result;
};

// convertDate();
module.exports = { convertDate };
