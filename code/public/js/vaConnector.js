$(document).ready(function(){

	$('div.pagetitle>h5');

$('input#mapUploader').change(function(e){
  console.log(e);
  readMap( this );
 // alert("DFDF");

});

function readMap(input) {
    if (input.files && input.files[0]) {
        var reader= new FileReader();
        reader.onload = function(e) {

          $('button#submitStuff').trigger('click');  

        };       
        reader.readAsDataURL( input.files[0] );

    }
}




	$('input#e1Val').click(function(){

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/redditList?term="+$('input#e1Val').val(),
	
		async : false,

		success : function(data) {
			//console.log("Dis :"+data[0].text);
			//console.log(data.length);
			for(var i = 0;i<data.length;i++){
				// if(data[i].thumbnail.search('jpg')==3){
				// 	//alert(data[i].thumbnail);
				// 	$('fieldset#notiVal').replaceWith('<fieldset id="notiVal">  <input id="plain_icon" name="plain_icon" type="text" value="img/icon.png">  <input id="plain_title" name="plain_title" type="text" value="'+data[i].title+'">  <textarea id="plain_message" name="plain_message">'+data[i].text+'</textarea> <input id="plain_submit" name="plain_submit" type="submit" value="Show notification" class="submit">  </fieldset>');
					
				// }
				// else{
				// 	//alert(data[i].thumbnail);
				// 	$('fieldset#notiVal').replaceWith('<fieldset id="notiVal">  <input id="plain_icon" name="plain_icon" type="text" value="img/icon.png">  <input id="plain_title" name="plain_title" type="text" value="'+data[i].title+'">  <textarea id="plain_message" name="plain_message">'+data[i].text+'</textarea> <input id="plain_submit" name="plain_submit" type="submit" value="Show notification" class="submit">  </fieldset>');
				// }
				$('fieldset#notiVal').replaceWith('<fieldset id="notiVal">  <input id="plain_icon" name="plain_icon" type="text" value="img/icon.png">  <input id="plain_title" name="plain_title" type="text" value="'+data[i].title+'">  <textarea id="plain_message" name="plain_message">'+data[i].text+'</textarea> <input id="plain_submit" name="plain_submit" type="submit" value="Show notification" class="submit">  </fieldset>');
			//$('fieldset#notiVal').replaceWith('<fieldset id="notiVal">  <input id="plain_icon" name="plain_icon" type="text" value="'+data[i].thumbnail+'">  <input id="plain_title" name="plain_title" type="text" value="'+data[i].title+'">  <textarea id="plain_message" name="plain_message">'+data[i].text+'</textarea> <input id="plain_submit" name="plain_submit" type="submit" value="Show notification" class="submit">  </fieldset>');
	$('input#plain_icon').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_title').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});

				

					$('input#plain_icon').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_title').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_submit').css({"opacity":"0","position":"absolute","top":"0"});

	$('input#plain_submit').trigger('click');
			}



		}

	});

	});

	$('input#e21Val').click(function(){

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/redditList?term="+$('input#e21Val').val(),
	
		async : false,

		success : function(data) {
			//console.log("Dis :"+data[0].text);
			//console.log(data.length);
			for(var i = 0;i<data.length;i++){

			$('fieldset#notiVal').replaceWith('<fieldset id="notiVal">  <input id="plain_icon" name="plain_icon" type="text" value="'+data[i].thumbnail+'">  <input id="plain_title" name="plain_title" type="text" value="'+data[i].title+'">  <textarea id="plain_message" name="plain_message">'+data[i].text+'</textarea> <input id="plain_submit" name="plain_submit" type="submit" value="Show notification" class="submit">  </fieldset>');
	$('input#plain_icon').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_title').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});

				

					$('input#plain_icon').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_title').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_submit').css({"opacity":"0","position":"absolute","top":"0"});

	$('input#plain_submit').trigger('click');
			}



		}

	});

	});




	$('input#ask_permission').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_submit').css({"opacity":"0","position":"absolute","top":"0"});
	$('div#plain_debug').css({"opacity":"0","position":"absolute","top":"0"});

	$('input#plain_icon').css({"opacity":"0","position":"absolute","top":"0"});
	$('input#plain_title').css({"opacity":"0","position":"absolute","top":"0"});
	$('textarea#plain_message').css({"opacity":"0","position":"absolute","top":"0"});
	

	$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/myHealthPersonalInformationReport?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#nameVal').val(tron["Name"]);
			 $('input#dobVal').val(tron["Date of Birth"]);


		}

	});

	$('li#firstHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
		//console.log($(this)[0].innerText);
		$('li#homer>a').text($(this)[0].innerText);
		$('div.pagetitle>h5').text($(this)[0].innerText);
	$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">Category 1</h4>    <p> <label>Name : </label> <span class="field"><input type="text" name="nameBox" id="nameVal" class="input-xxlarge" /></span> </p>  <p> <label>DOB : </label> <span class="field"><input type="text" name="dobBox" id="dobVal" class="input-mini" /></span> </p>    </div><!--#wiz1step1-->');	
	$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/myHealthPersonalInformationReport?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#nameVal').val(tron["Name"]);
			 $('input#dobVal').val(tron["Date of Birth"]);


		}

	});
	});




		$('li#secondHead>a').click(function(){
			$('div.stepContainer').css('height','auto');
			$('li#homer>a').text($(this)[0].innerText);
			$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="sourceVal" class="input-xxlarge" /></span> </p>  <p> <label>First Name : </label> <span class="field"><input type="text" name="gridrowsBox" id="fNameVal" class="input-mini" /></span> </p>  <p> <label>Middle Initials: </label> <span class="field"><input type="text" name="gridrowsBox" id="mIVal" class="input-mini" /></span> </p>  <p> <label>Last Name: </label> <span class="field"><input type="text" name="gridrowsBox" id="lNameVal" class="input-mini" /></span> </p>  <p> <label>Suffix: </label> <span class="field"><input type="text" name="gridrowsBox" id="suffixVal" class="input-mini" /></span> </p>  <p> <label>Alias: </label> <span class="field"><input type="text" name="gridrowsBox" id="aliasVal" class="input-mini" /></span> </p> </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/demographics?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#sourceVal').val(tron["Source"]);
			 $('input#fNameVal').val(tron["First Name"]);
$('input#mIVal').val(tron["Middle Initial"]);
$('input#lNameVal').val(tron["Last Name"]);
$('input#suffixVal').val(tron["Suffix"]);
$('input#aliasVal').val(tron["Alias"]);


		}

	});

		//second

	// 	$('div#wiz1step2').replaceWith('');

	// 			$.ajax({
	// 	type : "GET",
	// 	url : "http://techjamnow.cloudapp.net/demographics?userKey=1",
	// 	dataType: "json",
	// 	async : false,

	// 	success : function(data) {

	// 		var tron2 = tron.Event[0];
	// 		$('input#s1Val').val(tron2["Contact First Name"]);
	// 		$('input#s2Val').val(tron2["Contact Last Name"]);
	// 		$('input#s3Val').val(tron2["Relationship"]);
	// 		$('input#s4Val').val(tron2["Home Phone Number"]);
	// 		$('input#s5Val').val(tron2["Work Phone Number"]);
	// 		$('input#s6Val').val(tron2["Extension"]);
	// 		$('input#s7Val').val(tron2["Cell Phone Number"]);
	// 		$('input#s8Val').val(tron2["Address Line 1"]);
	// 		$('input#s9Val').val(tron2["Address Line 2"]);
	// 		$('input#s10Val').val(tron2["City"]);
	// 		$('input#s11Val').val(tron2["State"]);
	// 		$('input#s12Val').val(tron2["Country"]);



	// 		var tron3 = tron.Event[1];
	// 		$('input#e1Val').val(tron3["Contact First Name"]);
	// 		$('input#e2Val').val(tron3["Contact Last Name"]);
	// 		$('input#e3Val').val(tron3["Relationship"]);
	// 		$('input#e4Val').val(tron3["Home Phone Number"]);
	// 		$('input#e5Val').val(tron3["Work Phone Number"]);
	// 		$('input#e1Val').val(tron3["Extension"]);
	// 		$('input#e2Val').val(tron3["Cell Phone Number"]);
	// 		$('input#e3Val').val(tron3["Address Line 1"]);
	// 		$('input#e4Val').val(tron3["Address Line 2"]);
	// 		$('input#e5Val').val(tron3["City"]);
	// 		$('input#e5Val').val(tron3["State"]);
	// 		$('input#e5Val').val(tron3["Country"]);


	// 	}

	// });




	});



		$('li#thirdHead>a').click(function(){
			$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>User Key : </label> <span class="field"><input type="text" name="mdescBox" id="uKVal" class="input-xxlarge" /></span> </p>  <p> <label>System Request Date/Time : </label> <span class="field"><input type="text" name="gridrowsBox" id="sRVal" class="input-mini" /></span> </p>  <p> <label>User Request Type: </label> <span class="field"><input type="text" name="gridrowsBox" id="urVal" class="input-mini" /></span> </p>  <p> <label>File Name: </label> <span class="field"><input type="text" name="gridrowsBox" id="fnVal" class="input-mini" /></span> </p>  <p> <label>Data Types Selected: </label> <span class="field"><input type="text" name="gridrowsBox" id="dtVal" class="input-mini" /></span> </p>  </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/downloadRequestSummary?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#uKVal').val(tron["userKey"]);
			 $('input#sRVal').val(tron["System Request Date/Time"]);
$('input#urVal').val(tron["User Request Type"]);
$('input#fnVal').val(tron["File Name"]);
$('input#dtVal').val(tron["Data Types Selected"]);



		}

	});




	});




		$('li#fourthHead>a').click(function(){
			$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="sFVal" class="input-xxlarge" /></span> </p>  <p> <label>Authentication Status : </label> <span class="field"><input type="text" name="gridrowsBox" id="aFVal" class="input-mini" /></span> </p>  <p> <label>Authentication Date : </label> <span class="field"><input type="text" name="gridrowsBox" id="adFVal" class="input-mini" /></span> </p>  <p> <label>Authentication Facility ID: </label> <span class="field"><input type="text" name="gridrowsBox" id="aFIVal" class="input-mini" /></span> </p>  <p> <label>Authentication Facility Name: </label> <span class="field"><input type="text" name="gridrowsBox" id="aFNVal" class="input-mini" /></span> </p>  </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/myHealthAccountSummary?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#sFVal').val(tron["Source"]);
			 $('input#aFVal').val(tron["Authentication Status"]);
$('input#adFVal').val(tron["Authentication Date"]);
$('input#aFIVal').val(tron["Authentication Facility ID"]);
$('input#aFNVal').val(tron["Authentication Facility Name"]);



		}

	});




	});


		$('li#fourthHead>a').click(function(){
			$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="sFVal" class="input-xxlarge" /></span> </p>  <p> <label>Authentication Status : </label> <span class="field"><input type="text" name="gridrowsBox" id="aFVal" class="input-mini" /></span> </p>  <p> <label>Authentication Date : </label> <span class="field"><input type="text" name="gridrowsBox" id="adFVal" class="input-mini" /></span> </p>  <p> <label>Authentication Facility ID: </label> <span class="field"><input type="text" name="gridrowsBox" id="aFIVal" class="input-mini" /></span> </p>  <p> <label>Authentication Facility Name: </label> <span class="field"><input type="text" name="gridrowsBox" id="aFNVal" class="input-mini" /></span> </p>  </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/myHealthAccountSummary?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#sFVal').val(tron["Source"]);
			 $('input#aFVal').val(tron["Authentication Status"]);
$('input#adFVal').val(tron["Authentication Date"]);
$('input#aFIVal').val(tron["Authentication Facility ID"]);
$('input#aFNVal').val(tron["Authentication Facility Name"]);



		}

	});




	});


		$('li#fifthHead>a').click(function(){
			$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="sFiveVal" class="input-xxlarge" /></span> </p>    </div><!--#wiz1step1-->');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/myHealthAccountSummary?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#sFiveVal').val(tron["Source"]);




		}

	});




	});



		$('li#sixthHead>a').click(function(){
			$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="sSixthVal" class="input-xxlarge" /></span> </p>    </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/treatmentFacilities?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#sSixthVal').val(tron["Source"]);




		}

	});




	});



		$('li#sixthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="seventhJVal" class="input-xxlarge" /></span> </p>    </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/healthInsurance?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#seventhJVal').val(tron["Source"]);




		}

	});




	});



		$('li#seventhHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="seventhFJVal" class="input-xxlarge" /></span> </p>  <p> <label>Last Updated : </label> <span class="field"><input type="text" name="mdescBox" id="seventhSJVal" class="input-xxlarge" /></span> </p>   </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/vaWellnessReminders?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#seventhFJVal').val(tron["Source"]);

			$('input#seventhSJVal').val(tron["Last Updated"]);


		}

	});




	});



				$('li#seventhHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="seventhFJVal" class="input-xxlarge" /></span> </p>  <p> <label>Last Updated : </label> <span class="field"><input type="text" name="mdescBox" id="seventhSJVal" class="input-xxlarge" /></span> </p>   </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/vaWellnessReminders?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#seventhFJVal').val(tron["Source"]);

			$('input#seventhSJVal').val(tron["Last Updated"]);


		}

	});




	});

				$('li#eigthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="eigthFJVal" class="input-xxlarge" /></span> </p>  <p> <label>Last Updated : </label> <span class="field"><input type="text" name="mdescBox" id="eigthSJVal" class="input-xxlarge" /></span> </p>   </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/vaAppointments?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#eigthFJVal').val(tron["Source"]);

			$('input#eigthSJVal').val(tron["Last Updated"]);


		}

	});




	});


				$('li#ninthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="ninthFJVal" class="input-xxlarge" /></span> </p>  <p> <label>Last Updated : </label> <span class="field"><input type="text" name="mdescBox" id="ninthSJVal" class="input-xxlarge" /></span> </p>   </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/vaMedicationHistory?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#ninthFJVal').val(tron["Source"]);

			$('input#ninthSJVal').val(tron["Last Updated"]);


		}

	});




	});


				$('li#tenthHead>a').click(function(){
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div.stepContainer').css('height','auto');

		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="tenthFJVal" class="input-xxlarge" /></span> </p>    </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/medicalEvents?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];

			console.log("Tenth : "+data[0]);
			$('input#tenthFJVal').val(tron["Source"]);



		}

	});




	});



								$('li#eleventhHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="eleventhFJVal" class="input-xxlarge" /></span> </p>    </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/immunizations?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#eleventhFJVal').val(tron["Source"]);




		}

	});




	});


												$('li#twelthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="twFJVal" class="input-xxlarge" /></span> </p> <p> <label>Last Updated: </label> <span class="field"><input type="text" name="mdescBox" id="twSJVal" class="input-xxlarge" /></span> </p>  <p> <label>Sorted By : </label> <span class="field"><input type="text" name="mdescBox" id="twTJVal" class="input-xxlarge" /></span> </p>    </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/vaLaboratoryResults?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#twFJVal').val(tron["Source"]);

			$('input#twSJVal').val(tron["Last Updated"]);

			$('input#twTJVal').val(tron["Sorted By"]);
		}

	});




	});


																$('li#thirteenthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="thFJVal" class="input-xxlarge" /></span> </p>     </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/labsAndTests?userKey=1",
		
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#thFJVal').val(tron["Source"]);



		}

	});




	});


																				$('li#fourteenthHead>a').click(function(){

//






//




																					
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="fourtheenthFJVal" class="input-xxlarge" /></span> </p>     </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
//http://techjamnow.cloudapp.net/medicalEvents?userKey=1


		url : "http://techjamnow.cloudapp.net/medicalEvents?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
				console.log(data[0]);


			$('input#fourtheenthFJVal').val(tron["Source"]);

			var tron2 = tron.Event[0];
			$('input#e1Val').val(tron2["Medical Event"]);
			$('input#e2Val').val(tron2["Start Date"]);
			$('input#e3Val').val(tron2["Stop Date"]);
			$('input#e4Val').val(tron2["Response"]);
			$('input#e5Val').val(tron2["Comments"]);


			var tron3 = tron.Event[1];
			$('input#e21Val').val(tron3["Medical Event"]);
			$('input#e22Val').val(tron3["Start Date"]);
			$('input#e23Val').val(tron3["Stop Date"]);
			$('input#e24Val').val(tron3["Response"]);
			$('input#e25Val').val(tron3["Comments"]);

		}

	});




	});

																								$('li#fifteenthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="fifteenthFJVal" class="input-xxlarge" /></span> </p>     </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/familyHealthHistory?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#fifteenthFJVal').val(tron["Source"]);



		}

	});




	});

																												$('li#sixteenthHead>a').click(function(){
		$('div.stepContainer').css('height','auto');
$('li#homer>a').text($(this)[0].innerText);
$('div.pagetitle>h5').text($(this)[0].innerText);
		$('div#wiz1step1').replaceWith('<div id="wiz1step1" class="formwiz"> <h4 class="widgettitle">1: Account Summary</h4>    <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six1Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six2Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six3Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six4Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six5Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six6Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six7Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six8Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six9Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six10Val" class="input-xxlarge" /></span> </p>  <p> <label>Source : </label> <span class="field"><input type="text" name="mdescBox" id="six11Val" class="input-xxlarge" /></span> </p>   </div><!--#wiz1step1--> ');

		$.ajax({
		type : "GET",
		url : "http://techjamnow.cloudapp.net/militaryHealthHistory?userKey=1",
		dataType: "json",
		async : false,

		success : function(data) {
			var tron = data[0];
			$('input#six1Val').val(tron["Source"]);

			$('input#six2Val').val(tron["Event Title"]);

			$('input#six3Val').val(tron["Event Date"]);

			$('input#six4Val').val(tron["Service Branch"]);

			$('input#six5Val').val(tron["Rank"]);

			$('input#six6Val').val(tron["Exposures"]);

			$('input#six7Val').val(tron["Location of Service"]);

			$('input#six8Val').val(tron["Onboard Ship"]);

			$('input#six9Val').val(tron["Military Occupational Specialty"]);

			$('input#six10Val').val(tron["Assignment"]);

			$('input#six11Val').val(tron["Military Service Description"]);

		}

	});




	});










});
