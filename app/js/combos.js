
function SeatReservation(name, initialMeal) {
    
    var self = this;
    self.name = name;
    self.meal = ko.observable(initialMeal);

    self.formattedPrice = ko.computed(function() {
        var price = self.meal().price;
        return price ? "$" + price.toFixed(2) : "None";        
    });    
}

function ReservationsViewModel() {
    var self = this;

    self.availableMeals = [
        { mealName: "lanche + coca cola", price: 20.50 },
        { mealName: "Xis salada + suco ", price: 10.45},
        { mealName: "dois big x", price: 15.50 }
    ];    
    
    self.seats = ko.observableArray([
        new SeatReservation("", self.availableMeals[0]),
    ]);

    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++)
           total += self.seats()[i].meal().price;
       return total;
    });    

    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }

    self.removeSeat = function(seat) { self.seats.remove(seat) }
}

ko.applyBindings(new ReservationsViewModel());