import { FooterController } from "./footer.controller"

export class Footer {
    static Name: string = "appFooter"
    static Component: angular.IComponentOptions = {
        controller: FooterController,
        template: "App footer"
    }
}