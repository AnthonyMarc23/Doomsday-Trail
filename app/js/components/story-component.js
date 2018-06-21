"use strict";

const storyComponent = {
    templateUrl: `../templates/story.template.html`,
    controller: ["foodService", "$location", function(foodService, $location) {
        const vm = this;
        vm.counter = foodService.returnCount();
        vm.message = foodService.returnLocations();

        vm.nextPage = () => {
            $location.path("/location-component");
        }

        let i = 0;
        let txt = `Get ready! You have 15 seconds to grab 3 items. Choose wisely as the more calories in each food the better chance you have of survival.`; /* The text */
        let speed = 50; /* The speed/duration of the effect in milliseconds */
        let button = document.querySelector(".click");
       
        document.querySelector(".text").innerHTML = vm.message[vm.counter].message;

        // function typeWriter() {
        //   if (i < txt.length) {
        //       document.querySelector(".text").innerHTML += txt.charAt(i);
        //       i++;
        //       setTimeout(typeWriter, speed);
        //   } else if (i >= txt.length) {
        //     buttons();  
        //   }
        // }
        // function buttons() {
        //     button.style.display = "inline-block";
        // }

        // typeWriter();
        // setTimeout(typeWriter, 1000);
     }]
}


angular.module("app").component("storyComponent", storyComponent);