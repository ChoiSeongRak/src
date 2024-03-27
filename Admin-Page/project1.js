const lastUpdatedElement = document.getElementById("lastUpdated");
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
const day = ('0' + currentDate.getDate()).slice(-2);
const formattedDate = year + '-' + month + '-' + day;
lastUpdatedElement.textContent = "최근 업데이트된 일자: " + formattedDate;
