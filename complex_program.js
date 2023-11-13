/* Filename: complex_program.js
   Content: A complex program to simulate a virtual pet game */

// VirtualPet class
class VirtualPet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50;
    this.boredom = 50;
    this.energy = 50;
    this.age = 0;
    this.isAlive = true;
  }

  // Feed the pet
  feed() {
    this.hunger -= 10;
    this.boredom += 5;
    this.energy += 5;
  }

  // Play with the pet
  play() {
    this.hunger += 5;
    this.boredom -= 10;
    this.energy -= 5;
  }

  // Rest the pet
  rest() {
    this.hunger += 2;
    this.boredom += 2;
    this.energy += 20;
  }

  // Check if the pet is alive
  checkIsAlive() {
    if (this.hunger >= 100 || this.boredom >= 100 || this.energy <= 0) {
      this.isAlive = false;
    }
  }

  // Increment age
  incrementAge() {
    this.age++;
  }

  // Perform actions for the pet
  act() {
    this.hunger += 5;
    this.boredom += 5;
    this.energy -= 5;

    if (this.hunger >= 70) {
      this.feed();
    }

    if (this.boredom >= 70) {
      this.play();
    }

    if (this.energy <= 20) {
      this.rest();
    }

    this.checkIsAlive();
    this.incrementAge();
  }
}

// VirtualPetGame class
class VirtualPetGame {
  constructor() {
    this.pets = [];
    this.isGameRunning = false;
  }

  // Add a new pet to the game
  addPet(pet) {
    this.pets.push(pet);
  }

  // Remove a pet from the game
  removePet(pet) {
    const index = this.pets.indexOf(pet);
    if (index !== -1) {
      this.pets.splice(index, 1);
    }
  }

  // Start the game
  startGame() {
    this.isGameRunning = true;
    this.gameLoop();
  }

  // Stop the game
  stopGame() {
    this.isGameRunning = false;
  }

  // Game loop to perform actions for all pets
  gameLoop() {
    if (this.isGameRunning) {
      for (const pet of this.pets) {
        pet.act();
        console.log(`[${pet.name}] - Hunger: ${pet.hunger}, Boredom: ${pet.boredom}, Energy: ${pet.energy}, Age: ${pet.age}`);

        if (!pet.isAlive) {
          console.log(`[${pet.name}] has passed away.`);
          this.removePet(pet);
        }
      }

      setTimeout(() => {
        this.gameLoop();
      }, 1000);
    }
  }
}

// Create a new pet game
const petGame = new VirtualPetGame();

// Create some pets
const pet1 = new VirtualPet("Fluffy", "Dog");
const pet2 = new VirtualPet("Whiskers", "Cat");

// Add pets to the game
petGame.addPet(pet1);
petGame.addPet(pet2);

// Start the game
petGame.startGame();