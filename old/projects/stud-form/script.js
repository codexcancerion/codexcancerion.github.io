var odd = 1;

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
    
    // Check if student enrolls next term
    var enrollNextTerm;
    if(term==1) enrollNextTerm = "&#x2705; Yes";
    else enrollNextTerm = "&#10060; No";

    // Adds table row depending on odd or even
    var newRow;
    if(odd==1) {
        newRow = '<tr class="odd-row">';
        odd=2;
    }
    else if(odd==2) {
        newRow = '<tr class="even-row">';
        odd=1;
    } 
    // Create a new row for the table
    newRow += `
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
    else enrollNextTerm = "&#10060; No";
        

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

function searchBarInteracting(){
    var searchButton = document.getElementById('search-button');
    searchButton.classList.add('search-bar-interction');
}
function searchBarReleased(){
    var searchButton = document.getElementById('search-button');
    searchButton.classList.remove('search-bar-interction');
}