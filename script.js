let width = 0;
let height = 0;

function getAdditionalParameters(nameId){
    let additional = document.getElementById(nameId);
    additional.addEventListener("click", function(e){
        if(e.target.getAttribute("value") == "off"){
            e.target.setAttribute("value", "on");
        }
        else{
            e.target.setAttribute("value", "off");
        }
    })
}
function getvalueFromButtonGroup(nameId){
    let buttons = document.getElementById(nameId);
    buttons.addEventListener("click", function(e){
        let clickedelem = document.getElementById(e.target.id);
        buttons.setAttribute("value", clickedelem.getAttribute("value"));
    })
}

//DropDowns
function listenValueDropDown(buttonNameId, dropDownsItemsId){
    let dropDownItems = document.getElementById(dropDownsItemsId);
    let button = document.getElementById(buttonNameId);
    dropDownItems.addEventListener("click", function(e){
        button.innerHTML = e.target.innerText;
        dropDownItems.setAttribute('value', e.target.getAttribute("value"));
    })
}

// width Height
function listeValueWhenChangeWidth(nameId, outputId){
    document.getElementById(nameId).addEventListener("change", function(){
        document.getElementById(outputId).innerHTML =  document.getElementById(nameId).value + " mm";
        width = document.getElementById(nameId).value;
    })
}
function listeValueWhenChangeHeight(nameId, outputId){
    document.getElementById(nameId).addEventListener("change", function(){
        document.getElementById(outputId).innerHTML =  document.getElementById(nameId).value + " mm";
        height = document.getElementById(nameId).value;
    })
}


listeValueWhenChangeWidth("width", "textWidth");
listeValueWhenChangeHeight("height", "textHeight");
getvalueFromButtonGroup("windowsCount");
getvalueFromButtonGroup("colors");
listenValueDropDown("glazing", "glazingItems");
listenValueDropDown("profileCameras", "ProfileCamerasItems");
listenValueDropDown("windowType", "windowTypeItems");
getAdditionalParameters("additional");


let calculate = document.getElementById("calculate");
calculate.addEventListener("click", function(){
    listeValueWhenChangeWidth("width", "textWidth");
    let result = 0;
    let finalResult = document.getElementById("result");
    if(width != 0 || height != 0){
        result += (((width / 100) * 200) + ((height / 100) * 200));
        let glazing = document.getElementById("glazingItems").getAttribute("value");
        if(glazing == 2){
            result+=1500;
        }
        let profileCameras = document.getElementById("ProfileCamerasItems").getAttribute("value");
        if(profileCameras == 3){
            result+=100;
        } 
        else if(profileCameras == 4){
            result+=150;
        }
        else if(profileCameras == 5){
            result+=200;
        }        
        let windowType = document.getElementById("windowTypeItems").getAttribute("value");
        if(glazing == 1){
            if(windowType == 1){
                result +=1200;
            }
            else if(windowType == 2){
                result +=2000;
            }
        }
        if(glazing == 2){
            if(windowType == 1){
                result +=1500;
            }
            else if(windowType == 2){
                result +=2300;
            }
        }
        
        let check1 = document.getElementById("check1").value;
        let check2 = document.getElementById("check2").value;
        let check3 = document.getElementById("check3").value;

        if(check1 == "on"){
            result+=1000;
        }
        if(check2 == "on"){
            result+=100;
        }
        if(check3 == "on"){
            result+=200;
        }
        let buttons = document.getElementById("windowsCount").getAttribute("value");
        result = result * buttons;
        let colors = document.getElementById("colors").getAttribute("value");
        let colorResult = document.getElementById("colorResult");
        colorResult.innerHTML = colors;
        finalResult.innerHTML = result;
    }
    else{
        alert("Размер не может быть 0");
    }
    
});