<?php

// initialize all necessary variables for input retrieval
    $first_name = $middle_name = $last_name = $extension_name = $sex = "";
    $address_house_no = $address_street = $address_barangay = $address_city_municipality = $address_province = $address_region = "";
    $birth_date = $birth_place_city = $birth_place_province = $mother_first_name = $mother_middle_name = $mother_last_name = $mother_extension_name = "";
    $mobile_number = $owner_name = $owner_relationship = $education = $civil_status = $spouse_first_name = $spouse_middle_name = $spouse_last_name = $spouse_extension_name = $spouse_rsbsa_number = "";
    $religion = $indigenous_people_name = $is_person_with_disability = $is_4ps_beneficiary = $fca_ia_org_names = $identity_document_type = $identity_document_number = "";

    $livelihood = "";
    $location_barangay  = $location_city_municipality  = $location_province  = $total_area_hectares  = $is_ancestral_domain  =  $is_agrarian_reform_beneficiary  = "";
    $proof_of_ownership_doc_type  = $land_ownership_tenure_type  = $land_owner_first_name  = $land_owner_last_name  = $land_owner_extension_name  = "";
    $land_owner_rsbsa_number  = $cropping_schedule_start  = $cropping_schedule_end  = $commodity_crop  = $size_planted_area  = $number_of_heads_trees  = "";
    $farm_type  = $is_organic_farming  = $rotational_tiller_full_name  = $rotational_tiller_rsba_number  = "";




    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        // Assign values from form fields
        $first_name = $_POST["first_name"];
        $middle_name = $_POST["middle_name"];
        $last_name = $_POST["last_name"];
        $extension_name = $_POST["extension_name"];
        $sex = $_POST["sex"];
        $address_house_no = $_POST["address_house_no"];
        $address_street = $_POST["address_street"];
        $address_barangay = $_POST["address_barangay"];
        $address_city_municipality = $_POST["address_city_municipality"];
        $address_province = $_POST["address_province"];
        $address_region = $_POST["address_region"];
        $birth_date = $_POST["birth_date"];
        $birth_place_city = $_POST["birth_place_city"];
        $birth_place_province = $_POST["birth_place_province"];
        $mother_first_name = $_POST["mother_first_name"];
        $mother_middle_name = $_POST["mother_middle_name"];
        $mother_last_name = $_POST["mother_last_name"];
        $mother_extension_name = $_POST["mother_extension_name"];
        $mobile_number = $_POST["mobile_number"];
        $owner_name = $_POST["owner_name"];
        $owner_relationship = $_POST["owner_relationship"];
        $education = $_POST["education"];
        $civil_status = $_POST["civil_status"];
        $spouse_first_name = $_POST["spouse_first_name"];
        $spouse_middle_name = $_POST["spouse_middle_name"];
        $spouse_last_name = $_POST["spouse_last_name"];
        $spouse_extension_name = $_POST["spouse_extension_name"];
        $spouse_rsbsa_number = $_POST["spouse_rsbsa_number"];
        $religion = $_POST["religion"];
        $indigenous_people_name = isset($_POST["is_indigenous_people"]) ? $_POST["indigenous_people_name"] : "";
        $is_person_with_disability = isset($_POST["is_person_with_disability"]) ? $_POST["is_person_with_disability"] : "";
        $is_4ps_beneficiary = isset($_POST["is_4ps_beneficiary"]) ? $_POST["is_4ps_beneficiary"] : "";
        $fca_ia_org_names_1 = $_POST["fca_ia_org_name_1"];
        $fca_ia_org_names_2 = $_POST["fca_ia_org_name_2"];
        $fca_ia_org_names_3 = $_POST["fca_ia_org_name_3"];
        $identity_document_type = $_POST["identity_document_type"];
        $identity_document_number = $_POST["identity_document_number"];
    
    
        $livelihood = $_POST["livelihood"];
    
        $location_barangay = $_POST["location_barangay"];
        $location_city_municipality = $_POST["location_city_municipality"];
        $location_province = $_POST["location_province"];
        $total_area_hectares = $_POST["total_area_hectares"];
        $is_ancestral_domain = $_POST["is_ancestral_domain"];
        $is_agrarian_reform_beneficiary = $_POST["is_agrarian_reform_beneficiary"];
        $proof_of_ownership_doc_type = $_POST["proof_of_ownership_doc_type"];
        $land_ownership_tenure_type = $_POST["land_ownership_tenure_type"];
        $land_owner_first_name = $_POST["land_owner_first_name"];
        $land_owner_last_name = $_POST["land_owner_last_name"];
        $land_owner_extension_name = $_POST["land_owner_extension_name"];
        $land_owner_rsbsa_number = $_POST["land_owner_rsbsa_number"];
        $cropping_schedule_start = $_POST["cropping_schedule_start"];
        $cropping_schedule_end = $_POST["cropping_schedule_end"];
        $commodity_crop = $_POST["commodity_crop"];
        $size_planted_area = $_POST["size_planted_area"];
        $number_of_heads_trees = $_POST["number_of_heads_trees"];
        $farm_type = $_POST["farm_type"];
        $is_organic_farming = $_POST["is_organic_farming"];
        $rotational_tiller_full_name  = $_POST["rotational_tiller_full_name"];
        $rotational_tiller_rsba_number = $_POST["rotational_tiller_rsba_number"];
    }    


    echo '
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="data.css">
        <link rel="stylesheet" href="form-style.css">
    </head>
    <body>';
    echo "<main class='main'>";
        echo "<div class='section-holder'>
            <div class='section-holder-header'>
                <h2>FARMER INFORMATION</h2>
            </div> 
            ";

        // PART I
        echo '<span class="data-title">Part I: Personal Information</span>  ';        
        echo "<table class='table-container'>";
            // echo "<tr><th>Field</th><th>Value</th></tr>";
            echo "<tr><td class='field'>First Name</td><td class='value'>" . $first_name . "</td></tr>";
            echo "<tr><td class='field'>Middle Name</td><td class='value'>" . $middle_name . "</td></tr>";
            echo "<tr><td class='field'>Last Name</td><td class='value'>" . $last_name . "</td></tr>";
            echo "<tr><td class='field'>Extension Name</td><td class='value'>" . $extension_name . "</td></tr>";
            echo "<tr><td class='field'>Sex</td><td class='value'>" . $sex . "</td></tr>";
            echo "<tr><td class='field'>Address House No</td><td class='value'>" . $address_house_no . "</td></tr>";
            echo "<tr><td class='field'>Address Street</td><td class='value'>" . $address_street . "</td></tr>";
            echo "<tr><td class='field'>Address Barangay</td><td class='value'>" . $address_barangay . "</td></tr>";
            echo "<tr><td class='field'>Address City/Municipality</td><td class='value'>" . $address_city_municipality . "</td></tr>";
            echo "<tr><td class='field'>Address Province</td><td class='value'>" . $address_province . "</td></tr>";
            echo "<tr><td class='field'>Address Region</td><td class='value'>" . $address_region . "</td></tr>";
            echo "<tr><td class='field'>Birth Date</td><td class='value'>" . $birth_date . "</td></tr>";
            echo "<tr><td class='field'>Birth Place City</td><td class='value'>" . $birth_place_city . "</td></tr>";
            echo "<tr><td class='field'>Birth Place Province</td><td class='value'>" . $birth_place_province . "</td></tr>";
            echo "<tr><td class='field'>Mother's First Name</td><td class='value'>" . $mother_first_name . "</td></tr>";
            echo "<tr><td class='field'>Mother's Middle Name</td><td class='value'>" . $mother_middle_name . "</td></tr>";
            echo "<tr><td class='field'>Mother's Last Name</td><td class='value'>" . $mother_last_name . "</td></tr>";
            echo "<tr><td class='field'>Mother's Extension Name</td><td class='value'>" . $mother_extension_name . "</td></tr>";
            echo "<tr><td class='field'>Mobile Number</td><td class='value'>" . $mobile_number . "</td></tr>";
            echo "<tr><td class='field'>Owner Name</td><td class='value'>" . $owner_name . "</td></tr>";
            echo "<tr><td class='field'>Owner Relationship</td><td class='value'>" . $owner_relationship . "</td></tr>";
            echo "<tr><td class='field'>Education</td><td class='value'>" . $education . "</td></tr>";
            echo "<tr><td class='field'>Civil Status</td><td class='value'>" . $civil_status . "</td></tr>";
            echo "<tr><td class='field'>Spouse First Name</td><td class='value'>" . $spouse_first_name . "</td></tr>";
            echo "<tr><td class='field'>Spouse Middle Name</td><td class='value'>" . $spouse_middle_name . "</td></tr>";
            echo "<tr><td class='field'>Spouse Last Name</td><td class='value'>" . $spouse_last_name . "</td></tr>";
            echo "<tr><td class='field'>Religion</td><td class='value'>" . $religion . "</td></tr>";
            echo "<tr><td class='field'>Indigenous People Name</td><td class='value'>" . $indigenous_people_name . "</td></tr>";
            echo "<tr><td class='field'>Is Person With Disability</td><td class='value'>" . $is_person_with_disability . "</td></tr>";
            echo "<tr><td class='field'>Is 4Ps Beneficiary</td><td class='value'>" . $is_4ps_beneficiary . "</td></tr>";
            echo "<tr><td class='field'>FCA/IA/Organization Names</td><td class='value'>" . $fca_ia_org_names_1 . "</td></tr>";
            echo "<tr><td class='field'>FCA/IA/Organization Names</td><td class='value'>" . $fca_ia_org_names_2 . "</td></tr>";
            echo "<tr><td class='field'>FCA/IA/Organization Names</td><td class='value'>" . $fca_ia_org_names_3 . "</td></tr>";
        echo "</table>";

        // PART II 
        echo '<span class="data-title">Part II: Livelihood Information</span>  ';        
        echo "<table class='table-container'>";
            echo "<tr><td class='field'>Livelihood</td><td class='value'>" . $livelihood . "</td></tr>";
        echo "</table>";


        // PART III
        echo '<span class="data-title">Part III: Farm Parcel Information</span>  ';        
        echo "<table class='table-container'>";
            echo "<tr><td class='field'>Location Barangay</td><td class='value'>" . $location_barangay . "</td></tr>";
            echo "<tr><td class='field'>Location City/Municipality</td><td class='value'>" . $location_city_municipality . "</td></tr>";
            echo "<tr><td class='field'>Location Province</td><td class='value'>" . $location_province . "</td></tr>";
            echo "<tr><td class='field'>Total Area Hectares</td><td class='value'>" . $total_area_hectares . "</td></tr>";
            echo "<tr><td class='field'>Is Ancestral Domain</td><td class='value'>" . $is_ancestral_domain . "</td></tr>";
            echo "<tr><td class='field'>Is Agrarian Reform Beneficiary</td><td class='value'>" . $is_agrarian_reform_beneficiary . "</td></tr>";
            echo "<tr><td class='field'>Proof or Ownership Document Type</td><td class='value'>" . $proof_of_ownership_doc_type . "</td></tr>";
            echo "<tr><td class='field'>Land Ownership Tenure Type</td><td class='value'>" . $land_ownership_tenure_type . "</td></tr>";
            echo "<tr><td class='field'>Land Owner First Name</td><td class='value'>" . $land_owner_first_name . "</td></tr>";
            echo "<tr><td class='field'>Land Owner Last Name</td><td class='value'>" . $land_owner_last_name . "</td></tr>";
            echo "<tr><td class='field'>Land Owner Extension Name</td><td class='value'>" . $land_owner_extension_name . "</td></tr>";
            echo "<tr><td class='field'>Land Owner RSBSA Number</td><td class='value'>" . $land_owner_rsbsa_number . "</td></tr>";
            echo "<tr><td class='field'>Cropping Schedule Start</td><td class='value'>" . $cropping_schedule_start . "</td></tr>";
            echo "<tr><td class='field'>Cropping Shedule End</td><td class='value'>" . $cropping_schedule_end . "</td></tr>";
            echo "<tr><td class='field'>Commodity or Crop</td><td class='value'>" . $commodity_crop . "</td></tr>";
            echo "<tr><td class='field'>Size Planted Area</td><td class='value'>" . $size_planted_area . "</td></tr>";
            echo "<tr><td class='field'>Number of Heads/Trees</td><td class='value'>" . $number_of_heads_trees . "</td></tr>";
            echo "<tr><td class='field'>Farm Type</td><td class='value'>" . $farm_type . "</td></tr>";
            echo "<tr><td class='field'>Is Organic Farming</td><td class='value'>" . $is_organic_farming . "</td></tr>";
            echo "<tr><td class='field'>Rotational Tiller Full Name</td><td class='value'>" . $rotational_tiller_full_name . "</td></tr>";
            echo "<tr><td class='field'>Rotational Tiller RSBSA Number</td><td class='value'>" . $rotational_tiller_rsba_number . "</td></tr>";
        echo "</table>";

        echo "</div>";
        echo "</main>";
    echo "</body>";
    echo "</html>";

?>