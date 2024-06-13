# Destructoring with JavaScript and creating dynamic nested html div elements from array

# Cars-website

This JavaScript code script.js creates a grid of car parts on a webpage, essentially building a simple online catalog for car repairs. 

## Breakdown:

1. **`CarParts` Class:**
   - Defines a blueprint for creating objects that represent car parts.
   - Stores an array of `parts` with information about each part (name and image URL).

2. **`createGrid()` Function:**
   - Creates the main grid layout on the page.
   - Gets the `body` element (the main content area of the page).
   - Creates a new `div` with the class `grid-container` to hold the grid of car parts.
   - Iterates through the `parts` array using `forEach`, calling the `createContainer()` function for each part.

3. **`createContainer()` Function:**
   - Creates a container for each car part within the grid.
   - Creates two `div` elements:
     - `container` (for the overall part container)
     - `container-image` (to hold the image and description)
   - Calls the `createImage()` and `createCentered()` functions to add content to the container.

4. **`createImage()` Function:**
   - Creates the image element for each car part.
   - Sets the `src` attribute (the image source) to the URL from the `parts` array.
   - Appends the image to the `container-image` div.

5. **`createCentered()` Function:**
   - Creates the description part for each car part.
   - Creates a `div` with the class `centered` for positioning the text.
   - Adds an `h1` (heading) for the part name and a paragraph (`p`) for the "Book Repair" message.

6. **Creating the Instance:**
   - `const carParts = new CarParts();` creates a new instance of the `CarParts` class, making the `parts` array and functions available.
   - `carParts.createGrid();` calls the `createGrid()` function to start the process of building the grid on the page.

## In simpler terms:

- Defines a list of car parts with images.
- Creates a grid on the webpage to display these parts.
- For each part, it creates a container with an image and a description. 
- The description includes the part name and a "Book Repair" message.

This code creates a basic visual catalog that users can interact with, possibly leading to them booking repairs for specific car parts.
