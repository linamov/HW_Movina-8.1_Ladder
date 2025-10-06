let ladder = {
    step: 0,
    
    up() {
        this.step++;
        alert(`Step: ${this.step}`);
        return this;
    },
    
    down() {
        this.step--;
        alert(`Step: ${this.step}`);
        return this;
    },
    
    showStep() {
        alert(`Step: ${this.step}`);
        return this;
    }
};

// Example usage
alert("Starting ladder!");

ladder.up().up().down().showStep();
