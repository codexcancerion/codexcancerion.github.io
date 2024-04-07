function renderNavbar(targetTagId) {
    var targetField = document.getElementById(targetTagId);

    // TEMPLATE
    // <nav class="width-full">
    //             <div class="nav-logo">
    //                 <a href="../index.html"><h3 class="">RSBSA Home</h3></a>
    //             </div>
    //         </nav>
    
    var newNav = document.createElement("nav");
    newNav.classList.add("width-full");
    newNav.innerHTML = `
        <div class="nav-logo">
            <a href="../index.html"><h3 class="">RSBSA Home</h3></a>
        </div>
    `;

    targetField.appendChild(newNav);
}


