
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

    if (civilStatus.value === "Married") {
        spouseDetails.style.display = "block";
    } else {
        spouseDetails.style.display = "none";
    }
}

function toggleIccIpName() {
    var iccIpName = document.getElementById("icc-ip-name");
    var yesRadio = document.getElementById("is_indigenous_people_yes");

    if (yesRadio.checked) {
        iccIpName.style.display = "flex";
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
    label.setAttribute("for", "fca_ia_org_name_" + numFields);
    label.textContent = numFields + 1;

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", `fca_ia_org_name_${numFields}`);
    input.setAttribute("name", `fca_ia_org_name_${numFields}`);
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
    <div class="details" id="details">
                        <div class="farm-parcel-details" id="farm-parcel-details">
                            <span class="title">FARM PARCEL DESCRIPTION</span> <br>                   
                            
                            <label for="">Farm Location</label>
                            <div id="farm-location-fields">
                                <div class="fields"> 
                                    <div class="input-field">
                                        <label class="required" for="location_barangay">Barangay</label>
                                        <input type="text" placeholder="eg. Pico" id="location_barangay" name="location_barangay" required>
                                    </div>
                                    <div class="input-field">
                                        <label class="required" for="location_city_municipality">Municipality</label>
                                        <input type="text" placeholder="eg. La Trinidad" id="location_city_municipality" name="location_city_municipality" required>
                                    </div>
                                    <div class="input-field">
                                        <label class="required" for="location_province">Province</label>
                                        <input type="text" placeholder="eg. Benguet" id="location_province" name="location_province" required>
                                    </div>
                                </div>
                            </div>
                        
                            <div class="fields">
                                <div class="input-field width-full">
                                    <label class="required" for="total_area_hectares">Total Parcel Area</label>
                                    <input type="text" placeholder="eg. " id="total_area_hectares" name="total_area_hectares" required>
                                </div>
                                </div>
                        
                            <div class="fields">
                                <div class="">
                                    <span class="required">With Ancestral Domain (AD)?</span><br>
                                    <input type="radio" id="is_ancestral_domain_yes" name="is_ancestral_domain" value="Yes">
                                    <label for="is_ancestral_domain_yes">Yes</label>
                                    <br>
                                    <input type="radio" id="is_ancestral_domain_no" name="is_ancestral_domain" value="No">
                                    <label for="is_ancestral_domain_no">No</label>
                                </div>      
                                <div class="">
                                    <span class="required">Agrarian Reform Beneficiary (ARB)?</span><br>
                                                                            <input type="radio" id="is_agrarian_reform_beneficiary_yes" name="is_agrarian_reform_beneficiary" value="1">
                                    <label for="is_agrarian_reform_beneficiary_yes">Yes</label>
                                    <br>
                                    <input type="radio" id="is_agrarian_reform_beneficiary_no" name="is_agrarian_reform_beneficiary" value="0">
                                    <label for="is_agrarian_reform_beneficiary_no">No</label>
                                </div>                       
                            </div>
                            
                            <div class="fields">
                                <div class="input-field width-full">
                                    <label class="required" for="proof_of_ownership_doc_type">Submitted Proof of Land Ownership/Farmer Agreement</label>
                                        <select required id="proof_of_ownership_doc_type" name="proof_of_ownership_doc_type">
                                        <option disabled selected>Select document type</option>
                                        <option value="Certificate of Land Transfer">Certificate of Land Transfer</option>
                                            <option value="Emancipation Patent">Emancipation Patent</option>
                                            <option value="Individual Certificate of Land Ownership Award (CLOA)">Individual Certificate of Land Ownership Award (CLOA)</option>
                                            <option value="Collective CLOA">Collective CLOA</option>
                                            <option value="Co-ownership CLOA">Co-ownership CLOA</option>
                                            <option value="Agricultural sales patent">Agricultural sales patent</option>
                                            <option value="Homestead patent">Homestead patent</option>
                                            <option value="Free Patent">Free Patent</option>
                                            <option value="Certificate of Title or Regular Title">Certificate of Title or Regular Title</option>
                                            <option value="Certificate of Ancestral Domain Title">Certificate of Ancestral Domain Title</option>
                                            <option value="Certificate of Ancestral Land Title">Certificate of Ancestral Land Title</option>
                                            <option value="Tax Declaration">Tax Declaration</option>
                                            <option value="Others (eg. Barangay Certification, Lease or Tenancy Agreement)">Others (eg. Barangay Certification, Lease or Tenancy Agreement)</option>
                                        </select>
                                    </div>
                                    
                                    <div class="input-field width-full">
                                        <label class="required" for="land_ownership_tenure_type">Type of Ownership/Tenure</label>
                                        <select required id="land_ownership_tenure_type" name="land_ownership_tenure_type"></select>
                                            <option disabled selected>Select type</option>
                                            <option value="Registered Owner">Registered Owner</option>
                                            <option value="Tenant">Tenant</option>
                                            <option value="Lessee">Lessee</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            
                                <label class="">Name of Land Owner:</label>                    
                                <div id="land-owner-fields">
                                    <div class="fields">
                                        <div class="input-field">
                                            <label for="land_owner_first_name">First Name</label>
                                            <input type="text" placeholder="eg. " id="land_owner_first_name" name="land_owner_first_name">
                                        </div>
                                        <div class="input-field">
                                            <label for="land_owner_middle_name">Middle Name</label>
                                            <input type="text" placeholder="eg. " id="land_owner_middle_name" name="land_owner_middle_name">
                                        </div>
                                        <div class="input-field">
                                            <label for="land_owner_last_name">Last Name</label>
                                            <input type="text" placeholder="eg. " id="land_owner_last_name" name="land_owner_last_name">
                                        </div>
                                        <div class="input-field width-full">
                                            <label for="land_owner_extension_name">Extension Name</label>
                                            <input type="text" placeholder="eg. " id="land_owner_extension_name" name="land_owner_extension_name">
                                        </div>
                                        <div class="input-field width-full">
                                            <label for="land_owner_rsbsa_number">RSBSA Number</label>
                                            <input type="number" placeholder="eg. " id="land_owner_rsbsa_number" name="land_owner_rsbsa_number">
                                        </div>
                                    </div>
                                </div>
        
                                <div class="details personal">
                                    <span class="title">CROP INFORMATION</span> <br>
            
                                    <label class="">Cropping Schedule</label>   
                                    <div class="fields">
                                        <div class="input-field width-full">   
                                            <label for="cropping_schedule_start" class="required">Planting Month</label>                        
                                            <input type="text" placeholder="eg. March" id="cropping_schedule_start" name="cropping_schedule_start" required>
                                        </div>
                                        <div class="input-field width-full">   
                                            <label for="cropping_schedule_end" class="required">Estimated Harvesting Month</label>                        
                                            <input type="text" placeholder="eg. June" id="cropping_schedule_end" name="cropping_schedule_end" required>
                                        </div>
                                    </div>
            
                                    <label class="">Commodity/Crop</label>   
                                    <div class="fields">
                                        <div class="input-field ">   
                                            <label for="commodity_crop" class="required">Crop Name</label>                        
                                            <input type="text" placeholder="eg. Cabbage" id="commodity_crop" name="commodity_crop" required>
                                        </div>
                                        <div class="input-field ">   
                                            <label for="size_planted_area" class="">Size/Planted Area (HA)</label>                        
                                            <input type="text" placeholder="eg. " id="size_planted_area" name="size_planted_area" >
                                        </div>
                                        <div class="input-field ">   
                                            <label for="number_of_heads_trees" class="">Number of Heads/Trees</label>                        
                                            <input type="text" placeholder="eg. " id="number_of_heads_trees" name="number_of_heads_trees" >
                                        </div>
                                    </div>
            
                                    <label class="">Farm Type</label>   
                                    <div class="fields">
                                        <div class="input-field width-full"> 
                                            <label class="required">Type of Farm</label>
                                            <select required id="farm_type" name="farm_type">
                                                <option disabled selected>Select type</option>
                                                <option value="Irrigated">Irrigated</option>
                                                <option value="Rainfed Upland">Rainfed Upland</option>
                                                <option value="Rainfed Lowland">Rainfed Lowland</option>
                                                <option value="Urban/Perl-urban">Urban/Perl-urban</option>
                                                <option value="Not Applicable">Not Applicable</option>
                                            </select>
                                        </div>
                                    </div>
            
                                    <span class="">Organic Farming?</span><br>
                                    <div class="fields">
                                        <div class="">
                                            <input type="radio" id="is_organic_farming_yes" name="is_organic_farming" value="Yes">
                                            <label for="yes">Yes</label>
                                            <br>
                                            <input type="radio" id="is_organic_farming_no" name="is_organic_farming" value="No">
                                            <label for="no">No</label>
                                        </div>      
                                    </div>
                                    <br>
            
            
                                    <div class="details personal">
                                        <span class="title">ROTATIONAL TILLER</span> 
            
                                        <label class="">Name of Rotational Tiller:</label>                    
                                        <div class="fields">
                                            <div class="input-field width-full">
                                                <label for="rotational_tiller_full_name ">Full Name</label>
                                                <input type="text" placeholder="eg. " id="rotational_tiller_full_name " value="rotational_tiller_full_name ">
                                            </div>
                                            <div class="input-field width-full">
                                                <label for="rotational_tiller_rsba_number">RSBSA Number</label>
                                                <input type="number" placeholder="eg. " id="rotational_tiller_rsba_number" value="rotational_tiller_rsba_number">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="button-holder input-with-remove">
                                    <button class="" type="button" onclick="removeField(this)">Remove</button>
                                </div>
                                <div class="button-holder">
                                    <button class="" type="button" onclick="">Save</button>    
                                </div>
                            </div>   
                        </div>
    
    `;
    farmLocationFields.appendChild(newLocationField);
    
}

function removeField(element) {
    element.closest(".farm-parcel-details").remove();
}


