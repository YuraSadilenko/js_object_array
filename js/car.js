var car = {
  mark: 'Mersedes',
  color: 'red',
  year: '2018',
  mileage: '1000',
  isEngineStart: false,
  isStartMove: false,
  isStopMove: false,
  amountOfFuel: 26,
  startEngine: function() {
    this.isEngineStart = true;
  },
  startMove: function() {
    if (this.isEngineStart) {
      this.isStartMove = true;
      console.log('Машина марки ' + car.mark + ',' + car.color + ' цвета поехала!');
    } else {
      console.log('Включите вначале зажигание');
    }
    if (this.amountOfFuel < 10) {
      console.log('Вам нужно заправить свой автомобиль!');
    }
  },
  stopMoving: function() {
    if (this.isEngineStart) {
      this.isStopMove = true;
      console.log('Машинка остановилась');
    } else {
      console.log('Зажигание и так выключено');
    }
  },
  refuelling: function() {
    if (this.amountOfFuel < 10) {
      this.amountOfFuel = this.amountOfFuel + 50;
      console.log(this.amountOfFuel);
    } else {
      console.log('Вам не нужна заправка');
    }
  }
};

car.startEngine();
car.startMove();
car.stopMoving();
car.refuelling();