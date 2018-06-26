"use strict";

const landingPageComponent = {
    // templateUrl: "../templates/landing-page.template.html",
    templateUrl: `../templates/landing-page.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        foodService.getFoodItemsFromDB();
        angular.element(document.body).addClass("animate-background");

        vm.popup = false;
        vm.tempFoodArray;
        // for (let i = 0; i < vm.foodDatabase.length; i++) {
        //     vm.tempFoodArray.push(foodService.getFoodItems(vm.foodDatabase[i]));
        // }
        // console.log(vm.foodArray);

        vm.close = () => {
            vm.popup = false;
        }

        vm.nextPage = () => {
            angular.element(document.body).removeClass("animate-background");           
            $location.path("/prepper-stats-component");
        };

        vm.aboutGame = () => {
            if (vm.popup == true) {
                vm.popup = false;
            } else {
                vm.popup = true;
            }
        }

        // vm.makeTheCall = () => {
        //     console.log("make the call button working")
        //     vm.tempFoodArray = foodService.getFoodItems();
        // };

        // SAVE THIS FOR LATER USE, IN CASE WE WANT TO ADD MORE FOOD.
        // vm.pushToDB = (food) => {
        //     console.log(food);
        //     for (let i = 0; i < food.length; i++) {
        //         foodService.addFoodItemsToDB(food[i]);
        //     }
        // };
    }]
}

angular.module("app").component("landingPageComponent", landingPageComponent);

