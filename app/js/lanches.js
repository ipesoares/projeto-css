
// Class to represent a row in the seat reservations grid
function SeatReservation(name, initialMeal) {
    
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";        
    });    
}

// Overall viewmodel for this screen, along with initial state
function ReservationsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server
    self.availableMeals = [
        { mealName: "Calabresa", price: 11.50 },
        { mealName: "4 queijos", price: 10 },
        { mealName: "Peperone", price: 14.50 }
    ];    

    // Editable data
    self.seats = ko.observableArray([
        new SeatReservation("", self.availableMeals[0]),
        // new SeatReservation("", self.availableMeals[0])
    ]);

    // Computed data
    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++)
           total += self.seats()[i].meal().price;
       return total;
    });    

    // Operations
    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }
    self.removeSeat = function(seat) { self.seats.remove(seat) }
}

ko.applyBindings(new ReservationsViewModel());