//click events
document.getElementById("enroll").addEventListener("click", function(event){
  event.preventDefault();
  enroll();
});


document.getElementById("clear").addEventListener("click", function(event){
  event.preventDefault();
  clear();
});


//getting data from localStorage 
var allData = []
var getFromLocal = JSON.parse(localStorage.getItem("enrolledData"));
if(getFromLocal != null)
    allData = getFromLocal
allData.forEach(displayData);


//enroll new studnet
function enroll() {
    
    let name  = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value;
    let imagelink = document.getElementById("imagelink").value;
    let genderele = document.getElementsByName("gender");

    let gender = '';
    if(genderele[0].checked){
        gender = genderele[0].value;
    }
    if(genderele[1].checked){
        gender = genderele[1].value;
    }

    let skills = document.getElementsByClassName("skill");
    let allskill = '';

    for(i=0;i<3;i++){
        if(skills[i].checked == true){
            allskill += skills[i].value+", "
        }
    }


    let data = {
        name: name,
        email: email,
        website: website,
        imagelink: imagelink,
        gender: gender,
        skills:allskill,
    }

    allData.push(data);
    localStorage.setItem("enrolledData", JSON.stringify(allData));
    displayData(data)
    clear();
}


//displaying one record from all data
function displayData(data){
    var str = `<p> ${data['name']} <br/> ${data['email']} <br/> <a href=${data['website']}>${data['website']}</a> <br/> ${data['gender']} <br/> ${data['skills']} <br/></p>`
    
    var src = './user.png';

    if(data['imagelink']){
        src = data['imagelink'];
    }
    var image = `<img src=${src} />`
    
    var addRow = document.getElementById('table');
    var newRow = addRow.insertRow(1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = str;
    cell2.innerHTML = image
    cell2.id = "image"

}


//reset the form
function clear(){
    document.getElementById("form").reset();
}


