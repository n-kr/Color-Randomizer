function findColor() {
  var str = "0123456789ABCDEF";
  var arr = str.split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
      color += arr[Math.floor(Math.random() * 16)];
  }
  return color;
}

function showColor() {
  var myColor = findColor();
  $("#colorbox").css("background-color", myColor);
  $("#colorname").css("color", myColor);
  document.getElementById("colorname").innerHTML = myColor;
}