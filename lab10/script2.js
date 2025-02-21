document.getElementById("title").textContent = "Updated Title";

document.getElementsByName("username")[0].value = "John Doe";

const genderRadios = document.getElementsByName("gender");
for (let radio of genderRadios) {
    if (radio.checked) {
        console.log("Selected Gender:", radio.value);
    }
}

const paragraphs = document.getElementsByTagName("p");
console.log("Total <p> elements:", paragraphs.length);

const listItems = document.getElementsByTagName("li");
for (let li of listItems) {
    console.log("List Item:", li.textContent);
}

const inputFields = document.getElementsByClassName("input-field");
for (let field of inputFields) {
    field.style.backgroundColor = "lightblue";
}

const firstInfoParagraph = document.querySelector(".info");
if (firstInfoParagraph) {
    firstInfoParagraph.textContent = "This is the first info paragraph";
}

const firstGenderRadio = document.querySelector('input[name="gender"]');
if (firstGenderRadio) {
    firstGenderRadio.checked = true;
}

const infoParagraphs = document.querySelectorAll(".info");
infoParagraphs.forEach(p => console.log("Info Paragraph:", p.textContent));

const hobbyCheckboxes = document.querySelectorAll(".hobby");
hobbyCheckboxes.forEach(checkbox => {
    checkbox.checked = true;
    console.log("Checked Hobby:", checkbox.value);
});
