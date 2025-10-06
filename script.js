let ladder = {
  step: 0,

  up: () => {
    ladder.step++;
    return ladder;
  },

  down: () => {
    ladder.step--;
    return ladder;
  },

  showStep: () => {
    console.log(`Step: ${ladder.step}`);
    return ladder;
  }
};

// Демонстрація
console.log("Starting ladder...");


ladder.up().up().down().showStep(); 
ladder.up().showStep();             
ladder.down().down().showStep();     
