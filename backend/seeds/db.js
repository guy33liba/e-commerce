import Product from "../models.js/productSchema.js"
const seedDatabase = async () => {
  try {
    await Product.deleteMany() // Clear existing data

    const products = [
      {
        name: "Men's Casual T-shirt",
        type: "Men",
        description: "Comfortable and stylish casual T-shirt for men",
        price: 350,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230407153931/gfg-tshirts.jpg",
      },
      {
        name: "Luxury bag",
        type: "Not Applicable",
        description: "Elegant luxury bag with leather strap",
        price: 2500,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg",
      },
      {
        name: "Hoodie",
        type: "Men",
        description: "Light and classy hoodies for every seasons ",
        price: 450,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg",
      },
      {
        name: "Remote Control Toy car",
        type: "Not Applicable",
        description: "High-quality Toy car for fun and adventure",
        price: 1200,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240122182422/images1.jpg",
      },
      {
        name: "Books",
        type: "Women",
        description: "You wll have a great time reading .",
        price: 5000,
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20240110011854/reading-925589_640.jpg",
      },
      {
        name: "Bag",
        type: "Men",
        description: "Comfortable and supportive Bag ",
        price: 800,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230407154213/gfg-bag.jpg",
      },
      {
        name: "Winter hoodies for women",
        type: "Women",
        description: "Stay cozy in style with our womens hoodie, crafted for comfort ",
        price: 250,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20230407153938/gfg-hoodie.jpg",
      },

      {
        name: "Honda car ",
        type: "Men",
        description: "Powerful Honda car with comfy driving",
        price: 700,
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240122184958/images2.jpg",
      },
    ]

    await Product.insertMany(products)
    console.log("Database seeded successfully")
  } catch (error) {
    console.error("Error seeding database:", error)
  }
}

// Seed the database on server startup
seedDatabase()
