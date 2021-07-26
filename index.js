//Ex 1
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return (`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
    } 
   };
   console.log(robot.provideInfo());

   //Ex 2
   const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

  //Ex 3
  const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  robot._energyLevel = 'high ';
  
  console.log(robot.recharge());