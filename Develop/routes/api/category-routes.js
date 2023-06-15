const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res)=>{
  try {
    const categoryData= await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if (!CategoryData) {          
      res.status(404).json({message: 'no category found with this product'})
      return;
    } 
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
  })

  

//   router.post('/', async(req, res)=> {
//     try {
//       const 
//     }
// });

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
