let checkAllArray = convertArray('forall');
checkAllArray.forEach(elementCha => {
    elementCha.onchange = () => {
        let onchangeId = elementCha.getAttribute('id');
        let checkAllArrayCon = convertArray(onchangeId);
        checkAllArrayCon.forEach(elementCon => {
            if(elementCha.checked === true){
                elementCon.checked = true;
            }else{
                elementCon.checked = false;
            }
        });
    }
});

function convertArray(className){
    let classConvert = document.getElementsByClassName(className);
    let classConvertAray = Array.prototype.slice.call(classConvert);
    return classConvertAray;
}
