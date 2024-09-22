function renderTextInputField(targetTagId, label, id, placeholder, widthClass, inputType, required) {
    let targetField = document.getElementById(targetTagId);
    
    let newField = document.createElement("div");
    newField.classList.add("input-field");
    newField.classList.add(widthClass);

    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", id);
    newLabel.textContent = label;

    let newInput = document.createElement("input");
    newInput.setAttribute("id", id);
    newInput.setAttribute("name", id);
    newInput.setAttribute("type", inputType);
    newInput.setAttribute("placeholder", placeholder);

    if (required) {
        newLabel.classList.add("required");
        newInput.attributes.required = "required";
    }
    
    targetField.appendChild(newField);
    newField.appendChild(newLabel);
    newField.appendChild(newInput);
}


function renderNextButton(currentUnit, nextTargetId) {
    // <button class="nextBtn" onclick="renderNextUnit('part-1-unit-2')" type="button">
    //     <span class="btnText">Next</span>
    //     <i class="uil uil-navigator"></i>
    // </button>
    let targetField = document.getElementById(currentUnit);
    
    let newButton = document.createElement("button");
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('onclick', 'renderNextUnit("' +nextTargetId+ '")');
    newButton.innerHTML = `
        <span class="btnText">Next</span>
        <i class="uil uil-navigator"></i>
    `;

    targetField.appendChild(newButton);
}
