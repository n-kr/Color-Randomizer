function findColor() {
  const str = "0123456789ABCDEF";
  let arr = str.split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += arr[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showColor() {
  const myColor = findColor();
  $("#colorbox").css("background-color", myColor);
  $("#colorname").css("color", myColor);
  document.getElementById("colorname").innerHTML = myColor;
}