import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";

export default async function handler(req, res) {
  await mongooseConnect();
  const {categories, sort, query, ...filters} = req.query;
  let [sortField, sortOrder] = (sort || '_id-desc').split('-');

  const productsQuery = {};
  if (query) {
    productsQuery['$or'] = [
      {title:{$regex:query,$options:'i'}},
      {description:{$regex:query,$options:'i'}},
    ];
  }
 
  // console.log(productsQuery);
  res.json(await Product.find(
    productsQuery,
    null,
    {
      sort:{[sortField]:sortOrder==='asc' ? 1 : -1}
    })
  );
}