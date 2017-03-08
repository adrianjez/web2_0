
var baseURL = "https://vast-peak-59608.herokuapp.com";

function deleteStudent(id){
	console.log("Called delete for id: " + id);
	$.ajax({
            url: baseURL + "/students/" + id, // Pass empNo
            type: "DELETE" // Use DELETE
        })
}

function loadStudentsList(){
	
	
	var ulList = document.createElement('ul');
		
	$.getJSON(baseURL + "/students", function (json) {
		for(var i = 0; i < json.length; i++){
			var singleStudent = json[i];
			var item = document.createElement('li');
			item.appendChild(document.createTextNode(singleStudent.name));
			//item.appendChild(document.createTextNode(" " + singleStudent.surname));
			var button = document.createElement('button');
			button.id = singleStudent._id;
			button.onclick = function(){
				deleteStudent(item._id);
				location.reload();
			};
			item.appendChild(button);
			ulList.appendChild(item);
		}
	});
	
	document.getElementById('students_list').appendChild(ulList);
}

$(document).ready(function(){
	//console.log("Is about to call load Site()");
	loadStudentsList()
});
