import { test, expect, request } from "@playwright/test";

const BASE_URL = "https://www.shoppersstack.com/shopping";

test("Ecommerce Full API Flow", async ({ request }) => {
  let token: string;
  let shopperId: string;
  let productId: string;
  let itemId: string;
  let addressId: string;
  let orderId: string;
  let reviewId: string;
//! user register
  const registerRes = await request.post(`${BASE_URL}/shoppers`, {
    ignoreHTTPSErrors: true,
    data: {
      city: "Indore",
      country: "India",
      email: "customer12@gmail.com",
      firstName: "customer",
      gender: "MALE",
      lastName: "Custom",
      password: "customer@123",
      phone: 9889775643,
      state: "MP"
    },
  });
//! user login
  const loginRes = await request.post(`${BASE_URL}/users/login`, {
    ignoreHTTPSErrors: true,
    data: {
      email: "customer12@gmail.com",
      password: "customer@123",
      role: "SHOPPER"
    },
  });

  const loginJson = await loginRes.json();

  token = loginJson.data.jwtToken;
  shopperId = loginJson.data.userId;

  const authHeaders = { Authorization: `Bearer ${token}` };
//! get all products
  const productsRes = await request.get(`${BASE_URL}/products/alpha`, {
    ignoreHTTPSErrors: true,
    headers: authHeaders,
  });

  const productsJson = await productsRes.json();
  productId = productsJson.data[0].productId;
//! add to wish list
  const addWishlistRes = await request.post(
    `${BASE_URL}/shoppers/${shopperId}/wishlist`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        productId: String(productId),
        quantity: "2"
      },
    }
  );
   const addWishlistJson = await addWishlistRes.json();
//!get wish list
  const getWishlistRes = await request.get(
    `${BASE_URL}/shoppers/${shopperId}/wishlist`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
//! delete wish list
  const deleteWishlistRes = await request.delete(
    `${BASE_URL}/shoppers/${shopperId}/wishlist/${productId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
//!add to cart
  const addCartRes = await request.post(
    `${BASE_URL}/shoppers/${shopperId}/carts`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        productId: String(productId),
        quantity: 1
      },
    }
  );

  const addCartJson = await addCartRes.json();
  itemId = addCartJson.data.itemId;
//! get Cart
  const getCartRes = await request.get(
    `${BASE_URL}/shoppers/${shopperId}/carts`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
//! update cart
  const updateCartRes = await request.put(
    `${BASE_URL}/shoppers/${shopperId}/carts/${itemId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        productId: productId,
        quantity: 4
      },
    }
  );
//! delete cart
  const deleteCartRes = await request.delete(
    `${BASE_URL}/shoppers/${shopperId}/carts/${productId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
//! add new Address
  const addAddressRes = await request.post(
    `${BASE_URL}/shoppers/${shopperId}/address`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        buildingInfo: "Flat 302, Shyam Residency",
        streetInfo: "MG Road",
        landmark: "Near City Mall",
        city: "Thane",
        state: "Maharashtra",
        country: "India",
        pincode: "432101",
        name: "Sarthak",
        phone: "9876543210",
        type: "home"
      },
    }
  );
 

  const addAddressJson = await addAddressRes.json();
  addressId = addAddressJson.data.addressId;
//! get all address
  const getAllAddressRes = await request.get(
    `${BASE_URL}/shoppers/${shopperId}/address`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
  
//!get Address
  const getAddressByIdRes = await request.get(
    `${BASE_URL}/shoppers/${shopperId}/address/${addressId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
 
//! Add cart
  await request.post(`${BASE_URL}/shoppers/${shopperId}/carts`, {
    ignoreHTTPSErrors: true,
    headers: authHeaders,
    data: { productId: String(productId), quantity: 1 },
  });
//!place orders
  const placeOrderRes = await request.post(
    `${BASE_URL}/shoppers/${shopperId}/orders`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        address: {
          addressId: String(addressId),
          buildingInfo: "Flat 302, Shyam Residency",
          streetInfo: "MG Road",
          landmark: "Near City Mall",
          city: "Jaipur",
          state: "Rajasthan",
          country: "India",
          pincode: "302001",
          name: "Sarthak",
          phone: "9876543210",
          type: "home"
        },
        paymentMode: "COD"
      },
    }
  );
  

  const placeOrderJson = await placeOrderRes.json();
  
//!get orders
  const getOrdersRes = await request.get(
    `${BASE_URL}/shoppers/${shopperId}/orders`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
 

  const getOrdersJson = await getOrdersRes.json();
  orderId = getOrdersJson.data[0].orderId;
//!get Invoice
  const invoiceRes = await request.get(
    `${BASE_URL}/shoppers/${shopperId}/orders/${orderId}/invoice`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
  
//!update orderres
  const updateOrderRes = await request.patch(
    `${BASE_URL}/shoppers/${shopperId}/orders/${orderId}/?status=DELIVERED`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        orderId: orderId,
        shopperId: shopperId
      },
    }
  );
  
//!add reviews
  const addReviewRes = await request.post(
    `${BASE_URL}/reviews/?productId=${productId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        dateTime: "2026-03-28T07:11:51.092Z",
        description:
          "Great service and smooth shopping experience. Delivery was on time.",
        heading: "Excellent Experience",
        rating: 5,
        shopperId: shopperId,
        shopperName: "Sarthak"
      },
    }
  );
  

  const addReviewJson = await addReviewRes.json();
  reviewId = addReviewJson.data.reviewId;
//! GEt all reviews
  const getAllReviewsRes = await request.get(
    `${BASE_URL}/reviews/${productId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
 

  //! update Reviews

  const updateReviewRes = await request.put(
    `${BASE_URL}/reviews/${reviewId}/?productId=${productId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
      data: {
        description:
          "Great service and smooth shopping experience. Delivery was on time.",
        heading: "Excellent",
        rating: 5,
        shopperId: shopperId,
        shopperName: "Sarthak"
      },
    }
  );


  const deleteReviewRes = await request.delete(
    `${BASE_URL}/reviews/${reviewId}/?productId=${productId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
  

  const deleteAddressRes = await request.delete(
    `${BASE_URL}/shoppers/${shopperId}/address/${addressId}`,
    {
      ignoreHTTPSErrors: true,
      headers: authHeaders,
    }
  );
  
});