// Grab the entire URL for this page including the attached Get values
const currentUrl = window.location.href;
// console.log(currentUrl);

// Divide the url into two halves
const everything = currentUrl.split('?')
// console.log(everything )

// Grab just the second half
let formData = everything[1]
// console.log(formData)

// Break the form name value pair into an array
formData = formData.split('&')
// console.log(formData)

function show(cup) {
    // console.log(cup)
    formData.forEach(element => {
        console.log(element)
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40","@").replace("%2B","+")
        }
    })
    return(result)
}


const showInfo = document.querySelector("#results")
showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")} </p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")}</P>
<p>Your Phone: ${show("phone")}</P>
<p>Your Email: ${show("email")}</P>
`


