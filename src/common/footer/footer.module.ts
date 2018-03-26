import * as angular from "angular"
import { Footer } from "./footer.component"

export const FooterModule = angular
    .module("footer", [])
    .component(Footer.Name, Footer.Component)
    .name