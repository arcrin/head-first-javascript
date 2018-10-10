var passengers = [  { name: "Jane Doloop", paid: true, ticket: "coach" },
                    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
                    { name: "Sue Property", paid: false, ticket: "firstclass" },
                    { name: "John Funcall", paid: true, ticket: "premium" } ];

function processPassengers(passengers, test) {
    for (var i = 0; i < passengers.length; i++) {
        if (test(passengers[i])){
            return false
        }
    }
    return true
}

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel")
}

function checkNotPaid(passenger) {
    return (!passenger.paid)
}

function printPassenger(passenger) {
    var message = passenger.name
    if (passenger.paid) {
        message = message + " has paid"
    } else {
        message = message + " has not paid"
    }
    console.log(message)
    return false
}

// plane can only fly if every passenger is on the fly list
var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off; we have a passenger on the no fly list.")
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.")
}

// we don't care about the result here; we're just using
// processPassengers to display the passenger list

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like chicken or pasta?")
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function () {
            alert("Would like wine, cola or water?")
        };
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water.")
        }
    }
    return orderFunction
}

function createDinnerOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?")
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFunction = function() {
            alert("Would you like peanuts or pretzels?");
        };
    }
    return orderFunction;
}

function pickupTrash() {
    alert("Can I have your trash, please?")
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);

    getDrinkOrderFunction();

    getDinnerOrderFunction();

    getDrinkOrderFunction();
    getDrinkOrderFunction();

    getDrinkOrderFunction();

    pickupTrash()
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);
