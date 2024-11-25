// student no empty variable jya store thase input
let students = [];
// null variable jya student data edit thai sakse
let currentEditIndex = null;

function addStudent() {
    // badha input field le che 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const standard = document.getElementById('standard').value;
    const scienceMarks = document.getElementById('scienceMarks').value;
    const mathsMarks = document.getElementById('mathsMarks').value;
    const bioMarks = document.getElementById('bioMarks').value;
    // jo upar na badha input enter hoy to niche no code work kare
    // student no data new object create kari input push kare
   if (firstName && lastName && standard && scienceMarks && mathsMarks && bioMarks) {
    // jo badhi input ne value apel hoy to j te new student data no object bane je array ma object student.push() thi.
        students.push({ firstName, lastName, standard, scienceMarks, mathsMarks, bioMarks });
        // jo add student kare tyar pachi j form automatic clear thase nahitar add nai thaay function clear mate call thase
        clearForm();
    } else {
        // nahitar aa alert avse
        alert('Please fill in all fields.');
    } 
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('standard').value = '';
    document.getElementById('scienceMarks').value = '';
    document.getElementById('mathsMarks').value = '';
    document.getElementById('bioMarks').value = '';
}

function viewAllStudents() {
    // student data ni element ma innerhtml ne empty kare che
    const studentData = document.getElementById('studentData');
    studentData.innerHTML = '';
// student array na everytime new div banave che  je studentdiv bane
    students.forEach((student, index) => {
        const studentDiv = document.createElement('div');
        // aa div ma niche na badha input answer ane + edit name button add thase jethi edit student function banavi call kari sakay
        studentDiv.innerHTML = student.firstName + ' ' + student.lastName + ', Standard: ' + student.standard + ', Science: ' + student.scienceMarks + ', Maths: ' + student.mathsMarks + ', Bio: ' + student.bioMarks +' '+ '<button onclick="editStudent(' + index + ')">Edit</button>'+'<br>'+'<br>';
        studentData.innerHTML += studentDiv.innerHTML;
    });
}
// student data ne edit kare
function editStudent(index) {
    currentEditIndex = index;
    const student = students[index];
    document.getElementById('editFirstName').value = student.firstName;
    document.getElementById('editLastName').value = student.lastName;
    document.getElementById('editStandard').value = student.standard;
    document.getElementById('editScienceMarks').value = student.scienceMarks;
    document.getElementById('editMathsMarks').value = student.mathsMarks;
    document.getElementById('editBioMarks').value = student.bioMarks;
    // editsection ne hide karse display block karine 
    document.getElementById('editSection').style.display = 'block';
}

function saveEdit() {
    const firstName = document.getElementById('editFirstName').value;
    const lastName = document.getElementById('editLastName').value;
    const standard = document.getElementById('editStandard').value;
    const scienceMarks = document.getElementById('editScienceMarks').value;
    const mathsMarks = document.getElementById('editMathsMarks').value;
    const bioMarks = document.getElementById('editBioMarks').value;

    if (firstName && lastName && standard && scienceMarks && mathsMarks && bioMarks) {
        // jo upar ni badhi input field ne value (true) apel hoy to te student data ne student na array ma update karse je no index cureenteditindex che. 
        students[currentEditIndex] = { firstName, lastName, standard, scienceMarks, mathsMarks, bioMarks };
        // have save button click thata upar no code true thata editsection je che te display none thai jase ane viewallstudent function ma batavse
        document.getElementById('editSection').style.display = 'none';
        viewAllStudents();
    } else {
        alert('Please fill in all fields.');
        // jo edit karti vakhte koi input field empty hoy to aleert avse 
    }
}


2