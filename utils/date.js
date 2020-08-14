export const monthDiff = (d1, d2) => {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
};
export const getTodaysDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //As January is 0.
  const yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "-" + mm + "-" + yyyy;
};
export const getMinDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth(); //As January is 0.
  let yyyy = today.getFullYear() - 3;
  return new Date(yyyy, mm, dd);
};

export const getDateStringVal = (d) => {
  const date = new Date(d);
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yy;
};

export const getMonthDiff = (date) => {
  let today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  let months = years * 12 + (today.getMonth() - date.getMonth());
  return months;
};
