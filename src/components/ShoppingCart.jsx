import React from "react";

const ShoppingCart = () => {
  const products = [
    {
      id: 1,
      name: "Yellow Printed Kurti",
      category: "Kurti",
      price: 899,
      image: "https://m.media-amazon.com/images/I/71mX4WATh-L._SX679_.jpg",
    },
    {
      id: 2,
      name: "Red Straight Kurti",
      category: "Kurti",
      price: 999,
      image: "https://m.media-amazon.com/images/I/61msZMBzMXL._SY879_.jpg",
    },
    {
      id: 3,
      name: "Blue Denim Jeans",
      category: "Jeans",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/71IyDdUgZ3L._AC_SX569_.jpg",
    },
    {
      id: 4,
      name: "Beige Cotton Kurti",
      category: "Kurti",
      price: 799,
      image:
        "https://m.media-amazon.com/images/I/71PhAe6VA0L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 5,
      name: "Navy Blue Kurti",
      category: "Kurti",
      price: 899,
      image:
        "https://m.media-amazon.com/images/I/61SZ8qe4t-L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 6,
      name: "Casual Red Top",
      category: "Top",
      price: 699,
      image:
        "https://m.media-amazon.com/images/I/81G26D1JfmL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 7,
      name: "Women Denim Shorts",
      category: "Shorts",
      price: 599,
      image:
        "https://m.media-amazon.com/images/I/81bNOPJzxVL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: 8,
      name: "White Tank with Shorts",
      category: "Casual Wear",
      price: 749,
      image:
        "https://m.media-amazon.com/images/I/71+WBZWCnWL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];

  const AddCart = (e) => {
    alert("added to cart");
  };

  return (
    <div className="my-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-4">
        {products.map((item, index) => (
          <div className="flex flex-col bg-white shadow-lg w-72">
            <img
              className="w-72 h-48 object-cover"
              src={item.image}
              alt="image"
            />
            <div className="p-3 text-sm">
              <p className="text-slate-800 text-base font-medium my-1.5">
                {item.name}
              </p>
              <p className="text-slate-500">{item.category}</p>
              <p className="text-slate-600">$ {item.price}</p>

              <button
                onClick={AddCart}
                className="bg-green-800 text-white py-2 w-full mt-3 hover:bg-green-600"
              >
                Add to cart
              </button>
              {/* <div className="grid grid-cols-2 gap-2 mt-3">
                <button className="bg-slate-100 text-slate-600 py-2">
                  Add to cart
                </button>
                <button className="bg-slate-800 text-white py-2">
                  Buy now
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
