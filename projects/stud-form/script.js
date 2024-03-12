

// function validateForm() {
//     var fname = document.forms["student-form"]["fname"].value;
    
// }

// function saveToTable() {
//     // Get the values from the form inputs containing: fname, mname, lname, bdate, gender, email, contact-number, program, term and student-status  
//     // get the form data values and store them in variables
//     let firstName = document.getElementById("fname").value;
//     let middleName = document.getElementById("mname").value;
//     let lastName = document.getElementById("lname").value;
//     let gender = document.getElementById("gender").value;
//     let emailAddress = document.getElementById("email").value;
//     let phoneNumber = document.getElementById("phone").value;
//     let dateOfBirth = document.getElementById("bdate").value;
//     let program = document.getElementById("program").value;
//     let term = document.getElementById( "term" ).value;  
  

//         // Create new row
//         var table = document.getElementById("studentsTable");
//         var rowCount = table.rows.length;
//         var tbody = table.getElementsByTagName("tbody");
//         var row = tbody.createCell();
//         if (rowCount < 2) {
//             var rowIndex = 1;
//         } else {
//             var rowIndex = rowCount -  1;
//         }
        
//         var newRow = table.insertRow(rowIndex);
      
//         // Insert cells into the row.
//         for(var i=0 ;i<6;i++) { 
        
//         // Insert cells for each column 
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);
//         var cell4 = row.createCell(3);
        
//         // Add text to the cells
//         cell1.innerHTML = "test";
// }