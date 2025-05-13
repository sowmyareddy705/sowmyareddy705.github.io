
window.onload = function () {
  const daySelect = document.getElementById("day");
  const monthSelect = document.getElementById("month");
  const yearSelect = document.getElementById("year");

  
  for (let d = 1; d <= 31; d++) {
    let opt = document.createElement("option");
    opt.value = d;
    opt.text = d;
    daySelect.appendChild(opt);
  }

  
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  months.forEach((month, index) => {
    let opt = document.createElement("option");
    opt.value = index + 1;
    opt.text = month;
    monthSelect.appendChild(opt);
  });

  
  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1905; y--) {
    let opt = document.createElement("option");
    opt.value = y;
    opt.text = y;
    yearSelect.appendChild(opt);
  }
};