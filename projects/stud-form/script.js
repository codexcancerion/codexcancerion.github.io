var odd = 1;
var oddClass = '<tr class="odd-row">'
var evenClass = '<tr class="even-row">'

function saveToTable() {
    // Retrieve form values
    var fname = document.getElementById('fname').value;
    var mname = document.getElementById('mname').value;
    var mnameInitial = mname.charAt(0);
    var lname = document.getElementById('lname').value;
    var bdate = document.getElementById('bdate').value;
    var gender = document.getElementsByName('gender')[0].value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contact-number').value;
    var program = document.getElementsByName('program')[0].value;
    var term = document.getElementsByName('term')[0].value;
    var enrollNextTerm;

    if(term==1) enrollNextTerm = "&#x2705; Yes";
    else enrollNextTerm = "&#10062; No";
        
    var checkOdd = () => {
        if(odd==1) {
            odd=2;
            return oddClass;
        }
        else if(odd==2) {
            odd=1;
            return evenClass;
        }
        
    }

    // Create a new row for the table
    var newRow = checkOdd+`
                    <td>${lname.toUpperCase()}, ${fname.toUpperCase()} ${mnameInitial.toUpperCase()}. </td>
                    <td>${gender.toUpperCase()}</td>
                    <td>${email}</td>
                    <td>${program}</td>
                    <td>${enrollNextTerm}</td>
                </tr>`;

    // Append the new row to the table body
    document.getElementById('studentsTable').getElementsByTagName('tbody')[0].innerHTML += newRow;

    // Clear the form after submission
    document.getElementById('student-form').reset();
}

function saveTempData() {
    // Retrieve form values
    var fname = document.getElementById('temp-fname').value;
    var mname = document.getElementById('temp-mname').value;
    var mnameInitial = mname.charAt(0);
    var lname = document.getElementById('temp-lname').value;
    var gender = document.getElementsByName('temp-gender')[0].value;
    var email = document.getElementById('temp-email').value;
    var program = document.getElementsByName('temp-rogram')[0].value;
    var term = document.getElementsByName('temp-term')[0].value;
    var enrollNextTerm;

    if(term==1) enrollNextTerm = "&#x2705; Yes";
    else enrollNextTerm = "&#10062; No";
        

    // Create a new row for the table
    var newRow = `
                <tr>
                    <td>${lname.toUpperCase()}, ${fname.toUpperCase()} ${mnameInitial.toUpperCase()}. </td>
                    <td>${gender.toUpperCase()}</td>
                    <td>${email}</td>
                    <td>${program}</td>
                    <td>${enrollNextTerm}</td>
                </tr>`;

    // Append the new row to the table body
    document.getElementById('studentsTable').getElementsByTagName('tbody')[0].innerHTML += newRow;

    // Clear the form after submission
    document.getElementById('student-form').reset();
}