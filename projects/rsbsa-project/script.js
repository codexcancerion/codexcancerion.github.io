const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));



function toggleContactAdditionalField() {
    let additionalField = document.getElementById("contact-additional-field");    
    var notOwned = document.querySelector('input[name="contact-owned"][value="contact-no"]');
    if (notOwned.checked) {
        additionalField.style.display = "block";
    } else {
        additionalField.style.display = "none";
    }
}

function toggleSpouseDetails() {
    var spouseDetails = document.getElementById("spouseDetails");
    var civilStatus = document.getElementById("civil-status");

    if (civilStatus.value === "married") {
        spouseDetails.style.display = "block";
    } else {
        spouseDetails.style.display = "none";
    }
}

function toggleIccIpName() {
    var iccIpName = document.getElementById("icc-ip-name");
    var yesRadio = document.getElementById("yes");

    if (yesRadio.checked) {
        iccIpName.style.display = "block";
    } else {
        iccIpName.style.display = "none";
    }
}

function addAssociationField() {
    var associationFields = document.getElementById("association-fields");
    var numFields = associationFields.querySelectorAll(".fields").length;
    
    var newField = document.createElement("div");
    newField.classList.add("fields");

    var inputField = document.createElement("div");
    inputField.classList.add("input-field", "width-full");

    var label = document.createElement("label");
    label.textContent = numFields + 1;

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "eg.");

    var removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        removeAssociationField(newField);
    };

    var inputWithRemove = document.createElement("div");
    inputWithRemove.classList.add("input-with-remove");
    inputWithRemove.appendChild(input);
    inputWithRemove.appendChild(removeButton);

    inputField.appendChild(label);
    inputField.appendChild(inputWithRemove);
    newField.appendChild(inputField);
    associationFields.appendChild(newField);
}

function removeAssociationField(field) {
    field.remove();
}



function addFarmParcelDescription() {
    var farmLocationFields = document.getElementById("details");
    var numLocationFields = farmLocationFields.querySelectorAll(".fields").length;

    var newLocationField = document.createElement("div");
    newLocationField.classList.add("farm-parcel-details");
    newLocationField.innerHTML = `
    <span class="title">FARM PARCEL DESCRIPTION</span> <br>                   
                    
    <label for="">Farm Location</label>
    <div id="farm-location-fields">
        <div class="fields"> 
            <div class="input-field">
                <label class="required">Barangay</label>
                <input type="text" placeholder="eg. Pico" required>
            </div>
            <div class="input-field">
                <label class="required">Municipality</label>
                <input type="text" placeholder="eg. La Trinidad" required>
            </div>
            <div class="input-field">
                <label class="required">Province</label>
                <input type="text" placeholder="eg. Benguet" required>
            </div>
        </div>
    </div>

    <div class="fields">
        <div class="input-field width-full">
            <label class="required">Total Parcel Area</label>
            <input type="text" placeholder="eg. " required>
        </div>
    </div>

    <div class="fields">
        <div class="">
            <span class="required">With Ancestral Domain (AD)?</span><br>
            <input type="radio" id="ad_yes" name="ad" value="yes">
            <label for="ad_yes">Yes</label>
            <br>
            <input type="radio" id="ad_no" name="ad" value="no">
            <label for="ad_no">No</label>
        </div>      
        <div class="">
            <span class="required">Agrarian Reform Beneficiary (ARB)?</span><br>
            <input type="radio" id="arb_yes" name="arb" value="yes">
            <label for="arb_yes">Yes</label>
            <br>
            <input type="radio" id="arb_no" name="arb" value="no">
            <label for="arb_no">No</label>
        </div>                       
    </div>

    <div class="fields">
        <div class="input-field width-full">
            <label class="required">Submitted Proof of Land Ownership/Farmer Agreement</label>
            <select required>
                <option disabled selected>Select document type</option>
                <option>Certificate of Land Transfer</option>
                <option>Emancipation Patent</option>
                <option>Individual Certificate of Land Ownership Award (CLOA)</option>
                <option>Collective CLOA</option>
                <option>Co-ownership CLOA</option>
                <option>Agricultural sales patent</option>
                <option>Homestead patent</option>
                <option>Free Patent</option>
                <option>Certificate of Title or Regular Title</option>
                <option>Certificate of Ancestral Domain Title</option>
                <option>Certificate of Ancestral Land Title</option>
                <option>Tax Declaration</option>
                <option>Others (eg. Barangay Certification, Lease or Tenancy Agreement)</option>
            </select>
        </div>
        
        <div class="input-field width-full">
            <label class="required">Type of Ownership/Tenure</label>
            <select required>
                <option disabled selected>Select type</option>
                <option>Registered Owner</option>
                <option>Tenant</option>
                <option>Lessee</option>
                <option>Others</option>
            </select>
        </div>
    </div>

    <label class="">Name of Land Owner:</label>                    
    <div id="land-owner-fields">
        <div class="fields">
            <div class="input-field">
                <label>First Name</label>
                <input type="text" placeholder="eg. " >
            </div>
            <div class="input-field">
                <label>Middle Name</label>
                <input type="text" placeholder="eg. " >
            </div>
            <div class="input-field">
                <label>Last Name</label>
                <input type="text" placeholder="eg. ">
            </div>
            <div class="input-field width-full">
                <label>Extension Name</label>
                <input type="text" placeholder="eg. ">
            </div>
            <div class="input-field width-full">
                <label>RSBSA Number</label>
                <input type="number" placeholder="eg. ">
            </div>
        </div>
    </div>

    <div class="details personal">
                            <span class="title">CROP INFORMATION</span> <br>
    
                            <label class="">Cropping Schedule</label>   
                            <div class="fields">
                                <div class="input-field width-full">   
                                    <label for="" class="required">Planting Month</label>                        
                                    <input type="text" placeholder="eg. March" required>
                                </div>
                                <div class="input-field width-full">   
                                    <label for="" class="required">Estimated Harvesting Month</label>                        
                                    <input type="text" placeholder="eg. June" required>
                                </div>
                            </div>
    
                            <label class="">Commodity/Crop</label>   
                            <div class="fields">
                                <div class="input-field ">   
                                    <label for="" class="required">Crop Name</label>                        
                                    <input type="text" placeholder="eg. Cabbage" required>
                                </div>
                                <div class="input-field ">   
                                    <label for="" class="">Size/Planted Area (HA)</label>                        
                                    <input type="text" placeholder="eg. " >
                                </div>
                                <div class="input-field ">   
                                    <label for="" class="">Number of Heads/Trees</label>                        
                                    <input type="text" placeholder="eg. " >
                                </div>
                            </div>
    
                            <label class="">Farm Type</label>   
                            <div class="fields">
                                <div class="input-field width-full"> 
                                    <label class="required">Type of Farm</label>
                                    <select required>
                                        <option disabled selected>Select type</option>
                                        <option>Irrigated</option>
                                        <option>Rainfed Upland</option>
                                        <option>Rainfed Lowland</option>
                                        <option>Urban/Perl-urban</option>
                                        <option>Not Applicable</option>
                                    </select>
                                </div>
                            </div>
    
                            <span class="">Organic Farming?</span><br>
                            <div class="fields">
                                <div class="">
                                    <input type="radio" id="yes" name="fav_language" value="yes">
                                    <label for="yes">Yes</label>
                                    <br>
                                    <input type="radio" id="no" name="fav_language" value="no">
                                    <label for="no">No</label>
                                </div>      
                            </div>
                            <br>
    
    
                            <div class="details personal">
                                <span class="title">ROTATIONAL TILLER</span> 
    
                                <label class="">Name of Rotational Tiller:</label>                    
                                <div class="fields">
                                    <div class="input-field">
                                        <label>First Name</label>
                                        <input type="text" placeholder="eg. " >
                                    </div>
                                    <div class="input-field">
                                        <label>Middle Name</label>
                                        <input type="text" placeholder="eg. " >
                                    </div>
                                    <div class="input-field">
                                        <label>Last Name</label>
                                        <input type="text" placeholder="eg. ">
                                    </div>
                                    <div class="input-field width-full">
                                        <label>Extension Name</label>
                                        <input type="text" placeholder="eg. ">
                                    </div>
                                    <div class="input-field width-full">
                                        <label>RSBSA Number</label>
                                        <input type="number" placeholder="eg. ">
                                    </div>
                                </div>
                            </div>
    <div class="button-holder input-with-remove">
        <button class="" type="button" onclick="removeField(this)">Remove</button>
    </div>
    <div class="button-holder">
        <button class="" type="button" onclick="">Save</button>    
    </div>
    
    `;
    farmLocationFields.appendChild(newLocationField);
    
}

function removeField(element) {
    element.closest(".farm-parcel-details").remove();
}


