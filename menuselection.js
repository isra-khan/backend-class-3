let choice = 0;

choice = Number(prompt("Enter your choice"));

switch (choice) {

    case 1:
        console.log("You selected home");
        break;

    case 2:
        console.log("You selected about");
        break;

    case 3:
        console.log("You selected service");
        break;

    case 4:
        console.log("You selected contact");
        break;

    default:
        console.log("Invalid selection");
}