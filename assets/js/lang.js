var english = document.getElementById("en"),
    hungary = document.getElementById("hu"),
    change_text = document.getElementById("translate");
change_text_landing_button_primary = document.getElementById("landing_button_primary");
change_text_landing_button_secondary = document.getElementById("landing_button_secondary")
change_text_project_span = document.getElementById("project_span");
change_text_project_h2 = document.getElementById("project_h2");
change_text_project_p = document.getElementById("project_p");
    // declare some variables to catch the various HTML elements

english.addEventListener("click", function() {
    change(english, hungary);
}, false);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

hungary.addEventListener("click", function() {
    change(hungary, english);
}, false);



function change(lang_on, lang_off1) {
    if (!lang_on.classList.contains("current_lang")) {
        // if the span that the user clicks on does not have the "current_lang" class
        lang_on.classList.add("current_lang");
        // add the "current_lang" class to it
        lang_off1.classList.remove("current_lang");

        // remove the "current_lang" class from the other span
    }

    if (lang_on.innerHTML == "EN") {
        change_text.classList.add("english");
        change_text.classList.remove("hungary");
        change_text.innerHTML = "Website UI design, Comptetion writing";
        change_text_landing_button_primary.innerHTML = "Download CV"
        change_text_landing_button_secondary.innerHTML = "About me"
        change_text_project_span.innerHTML = "Services"
        change_text_project_h2.innerHTML = "Website develop"
        change_text_project_p.innerHTML = "Modern website develop, UI/UX design"
    } else if (lang_on.innerHTML == "HU") {
        change_text.classList.add("hungary");
        change_text.classList.remove("english");
        change_text.innerHTML = "Weblapfejlesztés, Pályázatírás";
        change_text_landing_button_primary.innerHTML = "CV letöltés"
        change_text_landing_button_secondary.innerHTML = "Rólam"
        change_text_project_span.innerHTML = "Szólgáltatások"
        change_text_project_h2.innerHTML = "Weblap fejltesztés"
        change_text_project_p.innerHTML = "Modern weblapfejlesztés, UI/UX design."
    }
}