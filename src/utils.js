export const numberWithCommas = (x) => {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "-";
  }
};

export const changeWhiteSpaceUrl = (url) => {
  if (typeof url === "string") {
    return url.replace(/ /g, "%20");
  }
  return null;
};

//  I know, i know the variable names are soo bad b
export const changeDataForChart = (res) => {
  let timeline = res.data.timeline;
  let c = createObject(timeline.cases);
  let d = createObject(timeline.deaths);
  let r = createObject(timeline.recovered);
  return { cases: c, death: d, recovered: r };
};
function createObject(obj) {
  let a = [];
  for (let i in obj) {
    a.push({ x: i.slice(0, -3), y: obj[i] });
  }
  return a;
}
