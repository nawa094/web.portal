const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const PORT = 3000;

// Define your routes
app.post("/stock/movements", (req, res) => {
  // Mock response data
  const responseData = {
    report_name: "Stock Movement Report",
    last_updated: new Date().toISOString(),
    movements: [
      {
        product_code: "ABC123",
        description: "Product ABC",
        stock: {
          head_office: 100,
          in_transit: 50,
          at_branch: 200,
          total: 350,
          suggested_stock: 400,
        },
        percentage_growth: 10,
        suggested_order_quantity: 50,
        factory_quantity: 100,
        estimated_sales_volume: 150,
        order_quantity: 50,
        fast_moving_label_indicator: true,
      },
      // Add more movement objects as needed
    ],
  };

  res.status(200).json(responseData);
});

// Endpoint to confirm stock orders
app.post("/stock/orders/confirm", (req, res) => {
  // Placeholder for actual order confirmation logic
  res.status(200).json({ message: "Stock orders confirmed successfully." });
});

// Endpoint to get all branches
app.get("/branches", (req, res) => {
  // Mock response data
  const branches = [
    { id: "1", description: "Branch A" },
    { id: "2", description: "Branch B" },
    // Add more branch objects as needed
  ];

  res.status(200).json(branches);
});

// Endpoint to search for branches
app.post("/branches", (req, res) => {
  // Placeholder for actual branch search logic
  const { search_query } = req.body;
  const results = [
    { id: "1", description: "Branch A" },
    { id: "2", description: "Branch B" },
    // Add more branch objects as needed
  ];

  res.status(200).json(results);
});

// Endpoint to get all customers
app.get("/customers", (req, res) => {
  // Mock response data
  const customers = [
    { id: "1", description: "Customer A" },
    { id: "2", description: "Customer B" },
    // Add more customer objects as needed
  ];

  res.status(200).json(customers);
});

// Endpoint to search for customers
app.post("/customers", (req, res) => {
  // Placeholder for actual customer search logic
  const { search_query } = req.body;
  const results = [
    { id: "1", description: "Customer A" },
    { id: "2", description: "Customer B" },
    // Add more customer objects as needed
  ];

  res.status(200).json(results);
});

// Endpoint to get all label types
app.get("/label-types", (req, res) => {
  // Mock response data
  const labelTypes = [
    { id: "1", description: "Label Type A" },
    { id: "2", description: "Label Type B" },
    // Add more label type objects as needed
  ];

  res.status(200).json(labelTypes);
});

// Endpoint to search for label types
app.post("/label-types", (req, res) => {
  // Placeholder for actual label type search logic
  const { search_query } = req.body;
  const results = [
    { id: "1", description: "Label Type A" },
    { id: "2", description: "Label Type B" },
    // Add more label type objects as needed
  ];

  res.status(200).json(results);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Middleware to serve Swagger UI
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
