// const txt = [
//   {
//     "part": "Engine",
//     "pic": "https://i.ibb.co/Gd1bNdF/car-parts-repair-garage-1170-1702.jpg"
//   }, // <--- Comma added here
//   {
//     "part": "Transmission",
//     "pic": "https://i.ibb.co/TMphzNZ/female-mechanic-holding-spare-parts-car-1170-1614.jpg"
//   },
//   {
//     "part": "Diagnostic",
//     "pic": "https://i.ibb.co/C8YBSfV/hands-mechanic-using-diagnostic-tool-1170-1188.jpg"
//   },
//   {
//     "part": "Suspension",
//     "pic": "https://i.ibb.co/Bs6h9Zt/low-angle-workshop-repairing-service-23-2150171281.jpg"
//   },
//   {
//     "part": "Tyres",
//     "pic": "https://i.ibb.co/XXfLwxH/mechanic-changing-tires-car-service-1303-26894.jpg"
//   },
//   {
//     "part": "Brakes",
//     "pic": "https://i.ibb.co/hWj02tB/worker-repairing-car-side-view-23-2150171257.jpg"
//   }
// ];


// const body = document.querySelector("body");
// // loop through the parentDiv from items
// const parentDiv = document.createElement("div");
// parentDiv.classList.add("grid-container");
// body.appendChild(parentDiv);
// txt.forEach((item) =>{
//   const container = document.createElement("div");
//   container.classList.add("container");
//   parentDiv.appendChild(container);
//   const containerImage = document.createElement("div");
//   containerImage.classList.add("container-image");
//   container.appendChild(containerImage);
//   const img = document.createElement("img");
//   img.src = item.pic;
//   containerImage.appendChild(img);
//   const centered = document.createElement("div");
//   centered.classList.add("centered");
//   containerImage.appendChild(centered);
//   const h1 = document.createElement("h1");
//   h1.textContent = item.part;
//   centered.appendChild(h1);
//   const p = document.createElement("p");
//   p.textContent = "Book Repair";
//   centered.appendChild(p);
// });

class CarParts {
  constructor() {
    this.parts = [
      {
        "part": "Engine",
        "pic": "https://i.ibb.co/Gd1bNdF/car-parts-repair-garage-1170-1702.jpg"
      },
      {
        "part": "Transmission",
        "pic": "https://i.ibb.co/TMphzNZ/female-mechanic-holding-spare-parts-car-1170-1614.jpg"
      },
      {
        "part": "Diagnostic",
        "pic": "https://i.ibb.co/C8YBSfV/hands-mechanic-using-diagnostic-tool-1170-1188.jpg"
      },
      {
        "part": "Suspension",
        "pic": "https://i.ibb.co/Bs6h9Zt/low-angle-workshop-repairing-service-23-2150171281.jpg"
      },
      {
        "part": "Tyres",
        "pic": "https://i.ibb.co/XXfLwxH/mechanic-changing-tires-car-service-1303-26894.jpg"
      },
      {
        "part": "Brakes",
        "pic": "https://i.ibb.co/hWj02tB/worker-repairing-car-side-view-23-2150171257.jpg"
      }
    ];
  }

  createGrid() {
    const body = document.querySelector("body");
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("grid-container");
    body.appendChild(parentDiv);

    this.parts.forEach((item) => {
      this.createContainer(parentDiv, item);
    });
  }

  createContainer(parentDiv, item) {
    const container = document.createElement("div");
    container.classList.add("container");
    parentDiv.appendChild(container);
    const containerImage = document.createElement("div");
    containerImage.classList.add("container-image");
    container.appendChild(containerImage);

    this.createImage(containerImage, item.pic);
    this.createCentered(containerImage, item.part);
  }

  createImage(containerImage, pic) {
    const img = document.createElement("img");
    img.src = pic;
    containerImage.appendChild(img);
  }

  createCentered(containerImage, part) {
    const centered = document.createElement("div");
    centered.classList.add("centered");
    containerImage.appendChild(centered);
    const h1 = document.createElement("h1");
    h1.textContent = part;
    centered.appendChild(h1);
    const p = document.createElement("p");
    p.textContent = "Book Repair";
    centered.appendChild(p);
  }
}

const carParts = new CarParts();
carParts.createGrid();

// The script also makes it easy to build your own frontend by simply replacing the existing image URLs in the `parts` array with your own picture links. This allows for quick customization without requiring additional coding.



