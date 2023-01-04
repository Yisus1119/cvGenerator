// ETIQUETAS DE HTML

const Nombre = document.getElementById("Name");
const Direccion = document.getElementById("Address");
const Correo = document.getElementById("Email");
const Numero = document.getElementById("Number");
const Pagina = document.getElementById("Website");
const Resumen = document.getElementById("Summary");
const Lenguaje = document.getElementById("Languajes");
const Trabajo = document.getElementById("Jobs");
const Educacion = document.getElementById("Education");
const Habilidades = document.getElementById("Skills");
const Certificaciones = document.getElementById("Certifications");

function generarCV() {
    if (Validate()) {

        const valorNombre = Nombre.value;
        const valorDireccion = Direccion.value;
        const valorCorreo = Correo.value;
        const valorNumero = Numero.value;
        const valorPagina = Pagina.value;
        const valorResumen = Resumen.value;
        const valorLenguaje = Lenguaje.value;
        const valorTrabajo = Trabajo.value;
        const valorEducacion = Educacion.value;
        const valorSkills = Habilidades.value;
        const valorCertificaciones = Certificaciones.value;

        const hr = document.createElement("hr")

        const CVGeneratedCard = document.getElementById("cv-container");

        const fluidContainer = document.createElement("div");
        fluidContainer.setAttribute("class", "container-fluid shadow-lg");

        const row = document.createElement("div");
        row.setAttribute("class", "row");


        const topRectangle = document.createElement("div");
        topRectangle.setAttribute("class", "top-rectangle");

        const rectangleContainer = document.createElement("div");
        rectangleContainer.setAttribute("class", "rectangle-container");

        const rectangleWhite = document.createElement("div");
        rectangleWhite.setAttribute("class", "rectangle-container-white");

        topRectangle.appendChild(rectangleContainer)
        topRectangle.appendChild(rectangleWhite)


        const col4 = document.createElement("div");
        col4.setAttribute("class", "col-4 left-cv-container");

        const h1title = document.createElement("h1");
        h1title.innerText = `${valorNombre}`;

        const aside = document.createElement("aside");

        const contactContainer = contactElement(valorDireccion, valorNumero, valorCorreo);

        const languageContainer = languagesElement(valorLenguaje)

        aside.appendChild(contactContainer)
        aside.appendChild(languageContainer)

        /*LEFT SIDE */
        col4.appendChild(h1title)
        col4.appendChild(aside)


        /*RIGHT SIDE */

        const asideRight = document.createElement("aside");

        const summaryContainer = summaryElement(valorResumen);
        const skillsContainer = skillsElement(valorSkills);
        const experienceContainer = experienceElement(valorTrabajo);
        const educationContainer = educationElement(valorEducacion);

        const certificationContainer = certificationElement(valorCertificaciones);

        asideRight.appendChild(summaryContainer);
        asideRight.appendChild(skillsContainer);
        asideRight.appendChild(experienceContainer);
        asideRight.appendChild(educationContainer);
        asideRight.appendChild(certificationContainer);


        const bottomRectangle = document.createElement('div');
        bottomRectangle.setAttribute('class', 'bottom-rectangle')

        const rectangleContainer2 = document.createElement("div");
        rectangleContainer2.setAttribute("class", "rectangle-container");

        const rectangleWhite2 = document.createElement("div");
        rectangleWhite2.setAttribute("class", "rectangle-container-white");

        bottomRectangle.appendChild(rectangleContainer2);
        bottomRectangle.appendChild(rectangleWhite2);

        const colRight = document.createElement("div");
        colRight.setAttribute("class", "col right-cv-container");

        colRight.appendChild(asideRight);

        row.appendChild(topRectangle);
        row.appendChild(col4);
        row.appendChild(colRight);
        row.appendChild(bottomRectangle);

        fluidContainer.appendChild(row);

        CVGeneratedCard.appendChild(fluidContainer);

        limpiarCampos();

    } else {
        alert("Debe llenar todos los campos");
    }
}

// That function create contact container element
function contactElement(addr, phone, email) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Contact';

    const addrInfo = createElement('div', '', 'addr-info')
    addrInfo.appendChild(createElement('p', '<b>Address:</b>')); addrInfo.appendChild(createElement('p', addr));

    const phoneInfo = createElement('div', '', 'phone-info')
    phoneInfo.appendChild(createElement('p', '<b>Phone:</b>'))
    phoneInfo.appendChild(createElement('p', phone))

    const emailInfo = createElement('div', '', 'email-info');
    emailInfo.appendChild(createElement('p', '<b>Email:</b>'));
    emailInfo.appendChild(createElement('p', email));

    const contactContainer = createElement('section', '', 'contact-container');

    contactContainer.appendChild(h3);
    contactContainer.appendChild(createElement('hr', ''));
    contactContainer.appendChild(addrInfo);
    contactContainer.appendChild(phoneInfo);
    contactContainer.appendChild(emailInfo);

    return contactContainer;
}


function summaryElement(summary) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Summary';

    const summaryInfo = createElement('p', summary)

    const summaryContainer = createElement('div', '', 'summary-container');

    summaryContainer.appendChild(h3);
    summaryContainer.appendChild(createElement('hr', ''));
    summaryContainer.appendChild(summaryInfo);

    return summaryContainer;
}


function skillsElement(skills) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Skill Highlight';

    let skillList = createElement('ul', '', 'skill-list');

    let arrSkills = skills.split(',')

    skillList = createIterationsElements('li', arrSkills, skillList)

    const skillContainer = createElement('div', '', 'skills-container');

    skillContainer.appendChild(h3);
    skillContainer.appendChild(createElement('hr', ''));
    skillContainer.appendChild(skillList);

    return skillContainer;
}


function educationElement(education) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Education';

    let educationList = createElement('div', '', 'education-info');

    let arrEducation = education.split(',')

    educationList = createIterationsElements('p', arrEducation, educationList)

    const educationContainer = createElement('div', '', 'skills-container');

    educationContainer.appendChild(h3);
    educationContainer.appendChild(createElement('hr', ''));
    educationContainer.appendChild(educationList);

    return educationContainer;
}


function languagesElement(languages) {
    const h3 = document.createElement("h3");
    h3.innerText = 'Languajes';

    let languagesInfo = createElement('div', '', 'languages-info');

    let arrLanguages = languages.split(',');

    languagesInfo = createIterationsElements('p', arrLanguages, languagesInfo)



    const languageContainer = createElement('section', '', 'contact-container');

    languageContainer.appendChild(h3);
    languageContainer.appendChild(createElement('hr', ''));
    languageContainer.appendChild(languagesInfo);

    return languageContainer;
}

function experienceElement(experience) {
    const h3 = document.createElement("h3");
    h3.innerText = 'Experiences';

    let experienceInfo = createElement('ul', '', 'skill-list');

    let arrExperience = experience.split(',');

    experienceInfo = createIterationsElements('li', arrExperience, experienceInfo);

    const experienceContainer = createElement('section', '', 'experience-container');

    experienceContainer.appendChild(h3);
    experienceContainer.appendChild(createElement('hr', ''));
    experienceContainer.appendChild(experienceInfo);

    return experienceContainer;

}

function createIterationsElements(tag, arr, container) {

    for (const iterator of arr) {

        let element = document.createElement(tag);
        element.innerText = iterator;

        container.appendChild(element);
    }

    return container;
}

function certificationElement(certification) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Certifications';

    let certificationInfo = createElement('div', '', 'cert-info');

    let arrCertification = certification.split(',');

    certificationInfo = createIterationsElements('p', arrCertification, certificationInfo);

    const certificationContainer = createElement('section', '', 'cert-container');

    certificationContainer.appendChild(h3);
    certificationContainer.appendChild(createElement('hr', ''));
    certificationContainer.appendChild(certificationInfo);

    return certificationContainer;
}


function createElement(tag, data, cssClass = '') {
    const t = document.createElement(tag);
    t.setAttribute('class', cssClass);
    t.innerHTML = data;

    return t;
}

function limpiarCampos() {
    Nombre.value = "";
    Nombre.classList.remove("input-error");
    Nombre.classList.remove("input-success");
    Nombre.focus();

    Direccion.value = "";
    Direccion.classList.remove("input-error");
    Direccion.classList.remove("input-success");

    Correo.value = "";
    Correo.classList.remove("input-error");
    Correo.classList.remove("input-success");

    Numero.value = "";
    Numero.classList.remove("input-error");
    Numero.classList.remove("input-success");

    Pagina.value = "";
    Pagina.classList.remove("input-error");
    Pagina.classList.remove("input-success");

    Resumen.value = "";
    Resumen.classList.remove("input-error");
    Resumen.classList.remove("input-success");

    Lenguaje.value = "";
    Lenguaje.classList.remove("input-error");
    Lenguaje.classList.remove("input-success");

    Trabajo.value = "";
    Trabajo.classList.remove("input-error");
    Trabajo.classList.remove("input-success");

    Educacion.value = "";
    Educacion.classList.remove("input-error");
    Educacion.classList.remove("input-success");

    Habilidades.value = "";
    Habilidades.classList.remove("input-error");
    Habilidades.classList.remove("input-success");

    Certificaciones.value = "";
    Certificaciones.classList.remove("input-error");
    Certificaciones.classList.remove("input-success");
}

function Validate() {
    let isValid = true;

    const valorNombre = Nombre.value;
    const valorDireccion = Direccion.value;
    const valorCorreo = Correo.value;
    const valorNumero = Numero.value;
    const valorPagina = Pagina.value;
    const valorResumen = Resumen.value;
    const valorLenguaje = Lenguaje.value;
    const valorTrabajo = Trabajo.value;
    const valorEducacion = Educacion.value;
    const valorSkills = Habilidades.value;
    const valorCertificaciones = Certificaciones.value;

    if (valorNombre == "" || valorNombre == null || valorNombre == undefined) {
        isValid = false;
        Nombre.classList.add("input-error");
        Nombre.classList.remove("input-success");
    } else {
        Nombre.classList.add("input-success");
        Nombre.classList.remove("input-error");
    }

    if (valorDireccion == "" || valorDireccion == null || valorDireccion == undefined) {
        isValid = false;
        Direccion.classList.add("input-error");
        Direccion.classList.remove("input-success");
    } else {
        Direccion.classList.add("input-success");
        Direccion.classList.remove("input-error");
    }

    if (valorCorreo == "" || valorCorreo == null || valorCorreo == undefined) {
        isValid = false;
        Correo.classList.add("input-error");
        Correo.classList.remove("input-success");
    } else {
        Correo.classList.add("input-success");
        Correo.classList.remove("input-error");
    }

    if (valorNumero == "" || valorNumero == null || valorNumero == undefined) {
        isValid = false;
        Numero.classList.add("input-error");
        Numero.classList.remove("input-success");
    } else {
        Numero.classList.add("input-success");
        Numero.classList.remove("input-error");
    }

    if (valorPagina == "" || valorPagina == null || valorPagina == undefined) {
        isValid = false;
        Pagina.classList.add("input-error");
        Pagina.classList.remove("input-success");
    } else {
        Pagina.classList.add("input-success");
        Pagina.classList.remove("input-error");
    }

    if (valorResumen == "" || valorResumen == null || valorResumen == undefined) {
        isValid = false;
        Resumen.classList.add("input-error");
        Resumen.classList.remove("input-success");
    } else {
        Resumen.classList.add("input-success");
        Resumen.classList.remove("input-error");
    }

    if (valorLenguaje == "" || valorLenguaje == null || valorLenguaje == undefined) {
        isValid = false;
        Lenguaje.classList.add("input-error");
        Lenguaje.classList.remove("input-success");
    } else {
        Lenguaje.classList.add("input-success");
        Lenguaje.classList.remove("input-error");
    }

    if (valorTrabajo == "" || valorTrabajo == null || valorTrabajo == undefined) {
        isValid = false;
        Trabajo.classList.add("input-error");
        Trabajo.classList.remove("input-success");
    } else {
        Trabajo.classList.add("input-success");
        Trabajo.classList.remove("input-error");
    }

    if (valorEducacion == "" || valorEducacion == null || valorEducacion == undefined) {
        isValid = false;
        Educacion.classList.add("input-error");
        Educacion.classList.remove("input-success");
    } else {
        Educacion.classList.add("input-success");
        Educacion.classList.remove("input-error");
    }

    if (valorSkills == "" || valorSkills == null || valorSkills == undefined) {
        isValid = false;
        Habilidades.classList.add("input-error");
        Habilidades.classList.remove("input-success");
    } else {
        Habilidades.classList.add("input-success");
        Habilidades.classList.remove("input-error");
    }

    if (valorCertificaciones == "" || valorCertificaciones == null || valorCertificaciones == undefined) {
        isValid = false;
        Certificaciones.classList.add("input-error");
        Certificaciones.classList.remove("input-success");
    } else {
        Certificaciones.classList.add("input-success");
        Certificaciones.classList.remove("input-error");
    }

    return isValid;
}