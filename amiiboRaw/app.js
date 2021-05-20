async function getAmiibo() {
  var apiText = "https://www.amiiboapi.com/api/amiibo/"
  
  alert(apiText);
  
  document.getElementById("amiibo").style.visibility="hidden";
  document.getElementById("detail").style.visibility="hidden";
  document.getElementById("loader").style.visibility="visible";
  document.getElementById("info1").innerHTML = "";
  document.getElementById("info2").innerHTML = "";
  document.getElementById("info3").innerHTML = "";

  //clears text
  document.getElementById("amiibo").innerHTML = "";

  const response = await fetch(apiText)
  const data = await response.json()

  alert(data.amiibo.length);

  //adds text
  for (charindex = 0; charindex <= data.amiibo.length-1; charindex++ ){
    document.getElementById("amiibo").innerHTML += "<option value=\"" + charindex + "\">" + data.amiibo[charindex].name + "</option>";
    document.getElementById("loader").style.visibility="hidden";
    document.getElementById("amiibo").style.visibility="visible";
    document.getElementById("detail").style.visibility="visible";
  }
}

async function getDetail() {
  var apiText = "https://www.amiiboapi.com/api/amiibo/"
  var getOne = document.getElementById("amiibo").value;
  var num = parseInt(getOne);
  
  alert(apiText);

  document.getElementById("loader1").style.visibility="visible";
  document.getElementById("loader2").style.visibility="visible";
  document.getElementById("loader3").style.visibility="visible";
  document.getElementById("info1").innerHTML = "";
  document.getElementById("info2").innerHTML = "";
  document.getElementById("info3").innerHTML = "";

  const response = await fetch(apiText)
  const data = await response.json()

  alert(data.amiibo.length);

  for (charindex = 0; charindex <= data.amiibo.length-1; charindex++ ){
    //if charindex -1
    if (getOne-1 == charindex) {
      document.getElementById("info1").innerHTML += "<br/>" + "<img src=\"" + data.amiibo[charindex].image + "\", width=\"80%\"/>" + "<br/>" + data.amiibo[charindex].name + "<br/>" + data.amiibo[charindex].gameSeries + "<br/>" + data.amiibo[charindex].amiiboSeries + "<br/>" + data.amiibo[charindex].type;
      document.getElementById("loader1").style.visibility="hidden";
    }
    //if charindex selected
    if (getOne == charindex) {
      document.getElementById("info2").innerHTML += "<br/>" + "<img src=\"" + data.amiibo[charindex].image + "\", width=\"80%\"/>" + "<br/>" + data.amiibo[charindex].name + "<br/>" + data.amiibo[charindex].gameSeries + "<br/>" + data.amiibo[charindex].amiiboSeries + "<br/>" + data.amiibo[charindex].type;
      document.getElementById("loader2").style.visibility="hidden";
    }
    //if charindex +1
    if (num+1 == charindex) {
      document.getElementById("info3").innerHTML += "<br/>" + "<img src=\"" + data.amiibo[charindex].image + "\", width=\"80%\"/>" + "<br/>" + data.amiibo[charindex].name + "<br/>" + data.amiibo[charindex].gameSeries + "<br/>" + data.amiibo[charindex].amiiboSeries + "<br/>" + data.amiibo[charindex].type;
      document.getElementById("loader3").style.visibility="hidden";
    }
  }

}
