import * as angular from "angular"
import { FooterModule } from "./footer/footer.module"

export const CommonModule = angular
    .module("app.common", [
        FooterModule
    ])
    .name