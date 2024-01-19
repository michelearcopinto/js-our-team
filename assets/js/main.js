const names = ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"];
const jobs = ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"];
const imgs = ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"];

const objectsArray = [];

const teamArray = document.getElementById('teamArray');
const teamRow = document.getElementById('teamRow');

let incrementale = 0;

function createObjectsArray() {

    for (let i = 0; i < names.length; i++) {

        let object = {
            nome: names[i],
            mansione: jobs[i],
            foto: imgs[i]
        }

        objectsArray.push(object);

        let employeeCardBox = document.createElement('div');
        let employeeCardString = document.createElement('div');
        let employeeString = document.createElement('span');
        let employeeImage = document.createElement('img');
        let employeeList = document.createElement('ul');

        teamArray.append(employeeCardString);
        employeeCardString.classList.add('mt-3')
        employeeCardString.innerHTML = `<h4 class="fw-bold mb-0">${objectsArray[i].nome}</h4>`
        employeeCardString.append(employeeString);
        employeeString.innerHTML = `<strong>mansione:</strong> ${objectsArray[i].mansione}, <strong>img path:</strong> ${objectsArray[i].foto}`


        employeeCardBox.classList.add('col-4', 'pt-3')
        employeeImage.classList.add('img-fluid')
        employeeList.classList.add('mt-2')
        employeeImage.src = `./assets/img/${imgs[i]}`;

        teamRow.append(employeeCardBox);
        employeeCardBox.append(employeeImage);
        employeeImage.style.display = 'block';

        for (let i = 0; i < 2; i++) {

            let employeeInfo = document.createElement('li');

            if (i === 0) {

                employeeInfo.textContent = objectsArray[incrementale].nome;

            } else if (i === 1) {

                employeeInfo.textContent = objectsArray[incrementale].mansione;
            }

            employeeList.append(employeeInfo);
        }

        employeeCardBox.append(employeeList);

        incrementale++
    }
}

createObjectsArray();

console.log(objectsArray);