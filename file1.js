
// function validateForm() {
//   let x = document.forms["myForm"]["pwd"].value;
//   if (x == "") {
//     alert("Current Password Must be Required");
//     return false;
//   }
// }

//     var passConfirm = function() {
//         if (document.getElementById("Password").value == document.getElementById("ConfirmPassword").value)
//          {
//             document.getElementById("Message").style.color = "Green";
//             document.getElementById("Message").innerHTML = "Passwords match!"
//        } else 
//        {
//            document.getElementById("Message").style.color = "Red";
//            document.getElementById("Message").innerHTML = "Passwords do NOT match!"
//        }
//    }
let inputs = document.querySelectorAll('input');

let btn = document.querySelector('button');

inputs.forEach((element, indexOne) => {

    element.addEventListener('keyup', (e) => {

        let currentElements = element, nextInput = element.
            nextElementSibling, prevInput = element.previousElementSibling;

        if (currentElements.value.length > 1) {
            currentElements.value = "";
            return;
        }

        if (nextInput && nextInput.hasAttribute('disabled') && currentElements.value !== "") {
            nextInput.removeAttribute('disabled');
            nextInput.focus();
        }

        if (e.key === "Backspace")

            inputs.forEach((element, indexTwo) => {

                if (indexOne <= indexTwo && prevInput) {
                    element.setAttribute('disabled', true);
                    element.value = "";
                    prevInput.focus();
                }
            })

            if(!inputs[3].disabled && inputs[3].value !=="")
            {
                btn.classList.add('validate');
                return;
            }
          btn.classList.remove('validate');
    })
});

window.addEventListener('load', () => {
    inputs[0].focus();
})