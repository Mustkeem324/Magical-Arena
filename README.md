# Magical Arena

## Description
A simulation of a magical arena where two players fight until one player's health reaches zero.

## Project Structure
```
magical-arena/
│
├── src/
│   ├── models/
│   │   ├── player.js
│   │   ├── dice.js
│   │   └── arena.js
│   ├── tests/
│   │   ├── player.test.js
│   │   ├── dice.test.js
│   │   └── arena.test.js
│   └── index.js
│
├── .gitignore
├── README.md
└── package.json
```

## How to Run

1. Navigate to the project directory:
    ```sh
    cd magical-arena
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the simulation:
    ```sh
    node src/index.js
    ```

4. Run the unit tests:
    ```sh
    npm test
    ```

## Details
- The project is implemented using Node.js without any third-party libraries or frameworks.
- The simulation is run by executing the `index.js` file, which sets up the players and starts the fight.
- Unit tests are provided to ensure the correctness of the player, dice, and arena functionalities.

## Author
- GitHub Repository: [Magical Arena](#)
