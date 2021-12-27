
import { appSwitch } from "../js/appSwitch.js";

[...document.getElementsByTagName("button")].forEach((button) => {
    button.addEventListener("click", (event) => {
        appSwitch[event.target.id]();
    });
});