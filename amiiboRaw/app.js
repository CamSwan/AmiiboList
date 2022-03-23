//This function is used to get the Amiibo you selected in the dropdown, the one before it, and the one after it. If a new Amiibo is selected in the dropdown it will clear the previous Amiibos and insert the newly selected Amiibos.
async function getAmiibo() {
  var apiText = "https://www.amiiboapi.com/api/amiibo/"
  
  alert("Go to "+ apiText +" to see the full Json list.");
  
  document.getElementById("loader").style.visibility="visible";

  const response = await fetch(apiText)
  const data = await response.json()

  alert("There are "+ data.amiibo.length + " amiibos to see!");

  //For each Amiibo in the list, assign them an index number. 
  for (charindex = 0; charindex <= data.amiibo.length-1; charindex++ ){
    document.getElementById("amiibo").innerHTML += "<option value=\"" + charindex + "\">" + data.amiibo[charindex].name + "</option>";
    document.getElementById("loader").style.visibility="hidden"; 
    document.getElementById("amiibo").style.visibility="visible";
    document.getElementById("detail").style.visibility="visible";
  }//ends the for
}//ends the getAmiibo function

//This function calls the Amiibo's image, name, gameseries, and type. When a new Amiibo is selected it will clear the previous details and input the new details. 
async function getDetail() {
  var apiText = "https://www.amiiboapi.com/api/amiibo/"
  var getOne = document.getElementById("amiibo").value;
  var num = parseInt(getOne);

  document.getElementById("loader1").style.visibility="visible";
  document.getElementById("loader2").style.visibility="visible";
  document.getElementById("loader3").style.visibility="visible";
  document.getElementById("info1").innerHTML = "";
  document.getElementById("info2").innerHTML = "";
  document.getElementById("info3").innerHTML = "";

  const response = await fetch(apiText)
  const data = await response.json()

  for (charindex = 0; charindex <= data.amiibo.length-1; charindex++ ){
    //if charindex -1, to get the amiibo before the selected amiibo.
    if (getOne-1 == charindex) {
      document.getElementById("info1").innerHTML += "<br/>" 
      + "<img src=\"" + data.amiibo[charindex].image + "\", width=\"80%\"/>" + "<br/>" 
      + data.amiibo[charindex].name + "<br/>" 
      + data.amiibo[charindex].gameSeries + "<br/>" 
      + data.amiibo[charindex].amiiboSeries + "<br/>" 
      + data.amiibo[charindex].type;
      document.getElementById("loader1").style.visibility="hidden";
    }//end of charindex -1 if

    //if charindex selected, to get the amiibo selected in the dropdown.
    if (getOne == charindex) {
      document.getElementById("info2").innerHTML += "<br/>" 
      + "<img src=\"" + data.amiibo[charindex].image + "\", width=\"80%\"/>" + "<br/>" 
      + data.amiibo[charindex].name + "<br/>" 
      + data.amiibo[charindex].gameSeries + "<br/>" 
      + data.amiibo[charindex].amiiboSeries + "<br/>" 
      + data.amiibo[charindex].type;
      document.getElementById("loader2").style.visibility="hidden";
    }//end of charindex selected if

    //if charindex +1, to get the amiibo after the selected amiibo.
    if (num+1 == charindex) {
      document.getElementById("info3").innerHTML += "<br/>" 
      + "<img src=\"" + data.amiibo[charindex].image + "\", width=\"80%\"/>" + "<br/>" 
      + data.amiibo[charindex].name + "<br/>" 
      + data.amiibo[charindex].gameSeries + "<br/>" 
      + data.amiibo[charindex].amiiboSeries + "<br/>" 
      + data.amiibo[charindex].type;
      document.getElementById("loader3").style.visibility="hidden";
    }//end of charindex +1 if
  }//end of for
}//end of getDetail function
