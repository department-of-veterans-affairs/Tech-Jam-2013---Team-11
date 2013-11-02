
var gridMatrix="[";
var mapFile;
var saveButton;
var gridPoi="[]";
var gridPoiDesc;
var configPos=1;



var gridArray = new Array(26);
for(var i=0;i<gridArray.length;i++){
  gridArray[i]=new Array(47);
}

var gridPoiArray = new Array(1000);
for(var i=0;i<gridPoiArray.length;i++){
  gridPoiArray[i]=new Array(1000);
}

for(var i=0;i<gridPoiArray.length;i++){
      for(var j=0;j<gridPoiArray[i].length;j++){
          gridPoiArray[i][j]=0;
}
}


for(var i=0;i<gridArray.length;i++){
      for(var j=0;j<gridArray[i].length;j++){
          gridArray[i][j]=1;
}
}


var startBool = 0;
var xVal = 1;
var yVal = 1;
function drawPath(){
  if(startBool==0){
    Controller.start();
    startBool = 1;
  }
 
}

function updatePos(){
  View.setStartPos(++xVal,yVal);
  Controller.startX=xVal;
  Controller.startY=yVal;
  Controller.restart();

}

function setStartPos(xParam,yParam){
  View.setStartPos(xParam,yParam);
  Controller.startX=xParam;
  Controller.startY=yParam;
}

function setEndPos(xParam,yParam){
  View.setEndPos(xParam,yParam);
  Controller.endX=xParam;
  Controller.endY=yParam;
}

function drawGrid(mapVal){


}

function drawPOI(poiData){

poiData.forEach(function(val){


  var tempXVal = val[0];
  var tempYVal = val[1];

  if(gridPoi.length===2){
    var tempArray = "[".concat(tempXVal).concat(",").concat(tempYVal).concat("]");
    gridPoi = gridPoi.substr(0,gridPoi.length-1).concat(tempArray).concat("]");

  }
  else{
    var tempArray = ",[".concat(tempXVal).concat(",").concat(tempYVal).concat("]");
    gridPoi = gridPoi.substr(0,gridPoi.length-1).concat(tempArray).concat("]");

  }


  View.rects[tempXVal][tempYVal].attr("fill","red");

  });



}









function drawPOIDesc(poiDesc){
	gridPoiDesc = poiDesc;

}

function gridOverlayCall(midVal,mapVal){


}


function drawMapThumb(mapVal){


  drawGrid(mapVal);
}


function updateScreenDimensions(gRows,gCols,nSize,mWidth,mHeight){

  View.numRows=gRows;
  View.numCols=gCols;
  View.nodeSize=nSize;

   tt[0].attributes.height.value=mHeight;
  tt[0].attributes.width.value=mWidth;


}
function setPOI(xParam,yParam){

  
  View.paper.rect(xParam*10,yParam*10,10,10).attr("fill","#e40");
}

function navigateToPOI(e){


  var tempXVal = Math.floor(e.clientX/10);
  var tempYVal = Math.floor(e.clientY/10);

  Controller.endX=tempXVal;
  Controller.endY=tempYVal;

  if(startBool==0){
    Controller.start();
    startBool = 1;
  }
  else{
    Controller.restart();
  }
}

function setGrid(e){

  var tempXVal = Math.floor(e.clientX/29);
  var tempYVal = Math.floor(e.clientY/29);


  console.log("X : "+tempXVal+" , Y : "+tempYVal);
  gridArray[tempYVal][tempXVal]=0;


}

function setPoiGrid(e){


  if(configPos===3){



  var tempXVal = Math.floor(e.clientX/29);
  var tempYVal = Math.floor(e.clientY/29);




for(var q=0;q<JSON.parse(gridPoi).length;q++){

	var yHere = JSON.parse(gridPoi)[q][1];
	var xHere = JSON.parse(gridPoi)[q][0];
	if((yHere===tempXVal)&&(xHere===tempYVal)){

		$('input#poidescBoxI').val(gridPoiDesc[q]);
	}



}

  if(gridPoi.length===2){
    var tempArray = "[".concat(tempYVal).concat(",").concat(tempXVal).concat("]");
    gridPoi = gridPoi.substr(0,gridPoi.length-1).concat(tempArray).concat("]");

  }
  else{
    var tempArray = ",[".concat(tempYVal).concat(",").concat(tempXVal).concat("]");
    gridPoi = gridPoi.substr(0,gridPoi.length-1).concat(tempArray).concat("]");


  }

$('li#tronli>a').trigger('click');
  }





}

function readMap(input) {
    if (input.files && input.files[0]) {
        var reader= new FileReader();
        reader.onload = function(e) {

          $('button#submitStuff').trigger('click');  

        };       
        reader.readAsDataURL( input.files[0] );

    }
}



function create2DimArray(gridType,uDesc,uGRows,uGCols){

  var kreen="";
      for(var i=0;i<gridArray.length;i++){
        kreen = "[";
            for(var j=0;j<gridArray[i].length;j++){
              
                kreen += gridArray[i][j]+",";
                

            }
            kreen = kreen.substr(0,kreen.length-1);
            kreen+="]";
            gridMatrix+=kreen+",";
            console.log(kreen+"tron");
            kreen="";
        }




        console.log("Create 2 Dim Array :"+uDesc);
        setGridMatrix(gridType,uDesc,uGRows,uGCols);


}

function setGridMatrix(gridType,uDesc,uGRows,uGCols){




  gridMatrix = gridMatrix.substr(0,gridMatrix.length-1);
  gridMatrix+="]";
    console.log("Grid : ",gridMatrix);

if(gridType==='insert'){

}
if(gridType==='update'){

console.log("SetGridMatrix : "+uDesc);


}



}

function createNewInstanceOfGridMatrix(){
  gridMatrix="[";
}

function onFinishCallback(){

    var uDesc = $('input#mdescBoxI').val();

  var uGRows = $('input#gridrowsBoxI').val();
  var uGCols = $('input#gridcolsBoxI').val();


  createNewInstanceOfGridMatrix();
  create2DimArray('update',uDesc,uGRows,uGCols);

       
}
function onShowStepCallback(e){
 // console.log($(e)[0].attributes[0].value);
  switch($(e)[0].attributes[0].value){

case '#wiz1step1':configPos=1;
              break;
case '#wiz1step2':configPos=2;
              break;
case '#wiz1step3':configPos=3;
              break;
default : configPos=1;
              break;

  }
} 


jQuery(document).ready(function ($) {

    jQuery('#wizard').smartWizard({onFinish: onFinishCallback,onShowStep: onShowStepCallback});

    jQuery('#wizard2').smartWizard({onFinish: onFinishCallback,onShowStep: onShowStepCallback});

    jQuery('#wizard3').smartWizard({onFinish: onFinishCallback,onShowStep: onShowStepCallback});
  

    jQuery('select, input:checkbox').uniform();




$('button#savepoidesc').click(function(){


  if(configPos===3){


  gridPoiDesc.push($('input#poidescBoxI').val());

  }
});




$('div#draw_area').hide();

$('div#draw_areapoi').hide();

$('img#fs').click(function(){

 $('div#draw_area').fadeToggle();

 $('div.mainwrapper').toggle();

});



(function(){

 var input = document.getElementById("mapUploader"),  formdata = false;  
          
    if (window.FormData) {  
        formdata = new FormData();  
        document.getElementById("submitStuff").style.display = "none";  
    } 

})();



$('div#config_Stuff_Panel').hide();
$('div#mapUpload_Panel').hide();
$('div#mapLoad_Panel').hide();
$('input#mapUploader').change(function(e){
  console.log(e);
  readMap( this );

});





  $('button#submitStuff').click(function(){

     createNewInstanceOfGridMatrix();
    create2DimArray('insert');
    
  });



$('button#addMap').click(function(){


  $('input#mapUploader').trigger('click');

});

$('button#saveGrid').click(function(){


              




  var uDesc = $('input#mdescBoxI').val();
  var uGRows = $('input#gridrowsBoxI').val();
  var uGCols = $('input#gridcolsBoxI').val();


  createNewInstanceOfGridMatrix();
  create2DimArray('update',uDesc,uGRows,uGCols);
    

});

$('button#loadExistingMap').click(function(){



  $('div#mapLoad_Panel').fadeToggle();

});




});
