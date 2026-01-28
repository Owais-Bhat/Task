const BASE_URL = "https://dummyjson.com";

export async function getProducts(limit = 20) {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}`);
  return res.json();
}

export async function getCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
}

export async function getProductsByCategory(category) {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}
