const url = https:raw.githubusercontent.com/sbloom22/Library-Project/main/NCAA%20Division%20I%20Teams%20(1).csv;


const universityName = getColumn(url,2);
const mascot = getColumn(url,3);
const city = getColumn(url,4);
const state = getColumn(url, 5);
const enrollment = getColumn(url,6);
const conference = getColumn(url, 7);


//A function that prints the url of an image if the university. 
// param - selectedUniversity - a string that will be the university name inputted by the user. 
//return urlToPrint - a url of a picture of the university.
function getImage(selectedUniversity){
  selectedUniversity = selectedUniversity.toLowerCase();
  var urlToPrint = "";
  for (var i in universityName){
    if (selectedUniversity == universityName[i].toLowerCase()){
      urlToPrint = universityURL[i]; 
      return urlToPrint;
    }
    }
    return "Please try again and enter a valid University name.";
}



//A function that finds the average enrollment number of all the universities. 
// return avgEnrollment {number} - Returns the average enrollment of all the universities.
function findEnrollment(){
  var sum = 0;
  for (var i = 0; i < enrollment.length; i++){
    sum += Number(enrollment[i]);
  }
  var average = sum / enrollment.length;
  return average; 
}
console.log(findEnrollment());



//A function that finds the average enrollment of a university. 
// return avgEnrollment {number} - Returns the average enrollment of a university.
function findEnrollment(selectedUniversity){
  var sum = 0;
  for (var i = 0; i < enrollment.length; i++){
    sum += Number(enrollment[i]);
  }
  var enrollment = getColumn(url,6);
  return enrollment
    ; 
}
console.log(findEnrollment());



//A function that finds the mascot of the selected college.
//Return slectedUniversity.mascot - Returns an image of the mascot of the college.
 
function getMascotImage(selectedUniversity){
  selectedUniversity = selectedUniversity.toLowerCase();
  var urlToPrint = "";
  for (var i in universityMascot){
    if (selectedUniversity == universityMascot[i].toLowerCase()){
      urlToPrint = universityMascotURL[i]; 
      return urlToPrint;
    }
    }
    return "Please select a college that exists.";
}



//A function thet gets the conference of the selected university.
//Return conference- Returns the conference that the selected university is apart of.
function getConference (selectedUniversity){

  for (var universityConference){
if (selectedUniversity = conference);

  }
  return conference;
}
console.log(getConference()));



function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }