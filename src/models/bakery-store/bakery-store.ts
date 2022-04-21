import { Bakery } from "../bakery/bakery"

export const BakeryStoreModel = {

  getBakeries() : Array<Bakery> {
    return [
      {name: "Laune Breads", images: [{url: "https://cdn.per-diem.co/production/stores/56/0b1cd3ce-f5b2-46dd-a6ff-2b1de97a925f-pxl_20220408_185105991.jpg"},{url: "https://images.squarespace-cdn.com/content/v1/55e48488e4b031b2b639e75f/1584126570570-GXNHJ34MJ4X66NEJJHX1/IMG-20191121-WA0001+%282%29.jpg"}]},
      {name: "Black Walnut", images: [{url: "https://images.squarespace-cdn.com/content/v1/57d2e5c5bebafbc1a4a62ae0/1477582159034-E9URG76FKOTW9TG4JHA1/Choc+Croix.jpg"}]},
      {name: "Marc Heu Patisserie Paris"},
      {name: "Sun Street Breads"},
      {name: "Isle Buns"},
      {name: "Sift"},
      {name: "Honey and Rye"},
      {name: "Savory Bake House"},
      {name: "Pie and Mighty"},
      {name: "Great Harvest"},
      {name: "Butter"},
      {name: "Rose Street"},
      {name: "El Mexicano"},
      {name: "Asa's Bakery", images:[{url:"https://www.asasbakery.com/wp-content/uploads/sb-instagram-feed-images/276107723_484722449814720_6926466845635478444_n.webpfull.jpg"}]},
      {name: "Rustica"},
      {name: "Halwo Kismayo Bakery"},
      {name: "Glam Doll Doughnuts"},
      {name: "Bogart Doughnuts"},
      {name: "Patisserie 46"},
      {name: "Turtle Bread"}
    ]
  }
}