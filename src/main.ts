import { application } from "./app"
import { HomeController } from "./controller/HomeController"

application
    .controller(HomeController.Name, HomeController)