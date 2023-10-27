import express from "express";
const app = express();
import { Users } from "./amazon.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;

  const keys = ["Uniq Id", "Product Name", "Category" , "Selling Price", "Model Number" , "About Product"   , "Product Specification"," Technical Details" ," Shipping Weight"  ,   " Image ",  "Product Url",  "Is Amazon Seller"  ];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

const connectDatabase = () =>{
  connect("localhost:5000",{
     
}).then(con=>{
  console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
})
}
app.listen(5000, () => console.log("API is working!"));  