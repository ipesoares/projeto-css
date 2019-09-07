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

    // itens que vão aparecer no select
    self.availableMeals = [
        { mealName: "Peperone", price: 11.50 },
        { mealName: "Frango", price: 10 },
        { mealName: "Calabresa", price: 14.50 }
    ];    

    //item que vem selecionado
    self.seats = ko.observableArray([
        new SeatReservation("", self.availableMeals[0]),
    ]);

    // soma dos valores
    self.totalSurcharge = ko.computed(function() {
       var total = 0;
       for (var i = 0; i < self.seats().length; i++)
           total += self.seats()[i].meal().price;
       return total;
    });    

    // operação de add novo item setado para o primeiro da lista
    self.addSeat = function() {
        self.seats.push(new SeatReservation("", self.availableMeals[0]));
    }

    // remover item
    self.removeSeat = function(seat) { self.seats.remove(seat) }
}

ko.applyBindings(new ReservationsViewModel());