const codingLanguages = ["HTML", "CSS", "JavaScript"];
const footerBuiltWith = document.getElementById('built-with');


function createScentence() {

    let codingString = '';

    codingLanguages.forEach((lang, i) => {
        if (i === 0) {
            codingString = `${lang}`;
        }

        if (i > 0 && i < codingLanguages.length - 1) {
            codingString += `, ${lang}`;
        }

        if (i === codingLanguages.length - 1) {
            codingString += ` and ${lang}.`;

        }


    })

    const result = `This page was built using: ${codingString}`;

    footerBuiltWith.innerHTML = result;
}

createScentence()