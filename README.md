# etch-a-sketch

A browser-based Etch-a-Sketch application built using **HTML, CSS, and JavaScript** 

The project allows users to draw on a grid by moving their mouse over individual squares. Users can also generate a new grid with a custom number of squares per side.

## Features

- **Dynamic Grid Generation:** Generate a grid with a custom number of squares per side, from 1 to 100.
- **Interactive Drawing:** Hover over the grid squares to change their colors.
- **Random Colors:** Each square receives a randomly generated RGB color when hovered over.
- **Input Validation:** Prevents invalid grid dimensions from being accepted.
- **Responsive Layout:** The grid adjusts to the available container width.
- **Grid Regeneration:** Clear the existing grid and generate a new one using the Generate button.
- **Flexbox Layout:** Uses CSS Flexbox to arrange the grid squares.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How to Run the Project

1. Clone this repository or download the project files.
2. Open the project folder in Visual Studio Code.
3. Make sure the following files are in the same directory:

   ```text
   project-folder/
   ├── index.html
   ├── style.css
   ├── script.js
   └── README.md
   ```

4. Open `index.html` in your browser.

   You can also use the **Live Server** extension in Visual Studio Code to run the project locally.

## How to Use

1. Open the application in your browser.
2. A default 16 × 16 grid will appear.
3. Move your mouse over the squares to change their colors.
4. Click the **Generate** button to create a new grid.
5. Enter the desired number of squares per side, from 1 to 100.
6. The existing grid will be cleared and replaced with the newly generated grid.

## What I Learned

Through this project, I practised:

- Manipulating the DOM using JavaScript.
- Creating HTML elements dynamically.
- Using nested loops to generate a two-dimensional grid.
- Adding event listeners to respond to mouse interactions.
- Generating random RGB colors.
- Using CSS Flexbox to arrange elements.
- Validating user input.


## Acknowledgements

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practise foundational web development skills.

---

**Built with HTML, CSS, and JavaScript.**