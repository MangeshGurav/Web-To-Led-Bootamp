

function beforeSubmit(event){
    let inputDate = document.querySelector('.inputDate');
    let outputDate = document.querySelector('.outputDate');

    console.log("inputDate==>", inputDate.value); // string --> date  --> local fornamt (en_IN)

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN"); //underscore --> hypen
    console.log("formattedDate==>", formattedDate);

    outputDate = formattedDate;
    console.log("outputDate==>", outputDate);

}




