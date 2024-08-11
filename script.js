let captchaChecked = false;

function beforeSubmit(event) {
  if (captchaChecked) {
    let inputDate = document.querySelector(".inputDate");
    let outputDate = document.querySelector(".outputDate");

    console.log("inputDate==>", inputDate.value); // string --> date  --> local fornamt (en_IN)

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN"); //underscore --> hypen
    console.log("formattedDate==>", formattedDate);

    outputDate = formattedDate;
    console.log("outputDate==>", outputDate);
  }else{
    alert("Please check reCAPTCHA box to submit the lead.")
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function capthcsucess() {
  captchaChecked = true;
}
