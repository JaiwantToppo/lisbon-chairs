function setID() {
  return crypto.randomUUID().slice(2, 8);
}

const products = [
  {
    id: setID(),
    file: "chair-1.jpg",
    name: "The Laid Back",
    type: "Leisure and Relaxing",
    comfort: "Comfortable upto 4h",
    material: "Vegan Leather",
    weight: "Weighs 16 kg",
    price: 250,
  },
  {
    id: setID(),
    file: "chair-2.jpg",
    name: "The Worker Bee",
    type: "Work",
    comfort: "Comfortable upto 8h",
    material: "Vegan Leather",
    weight: "Weighs 22 kg",
    price: 525,
  },
  {
    id: setID(),
    file: "chair-3.jpg",
    name: "The Sofa 4/2",
    type: "Leisure and Relaxing",
    comfort: "Comfortable all day",
    material: "Organic Cotton",
    weight: "Weighs 80 kg",
    price: 1450,
  },
];

export default products;
