import "./styles.css";
import "../index.html";

let today = new Date();
console.log(today);

var fullYear = today.getFullYear();
console.log(fullYear);

let date = today.getDate();

let month = today.getMonth() + 1;

if (month < 10) {
  month = "0" + month;
}
if (date < 10) {
  date = "0" + date;
}
console.log(
  date + "-" + month + "-" + fullYear,
  date + "/" + month + "/" + fullYear
);
