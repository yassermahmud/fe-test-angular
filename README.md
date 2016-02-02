## Bloom & Wild frontend test

On our checkout we have a pricing calculator that factors in a few things:
* The bouquet being selected
* The amount of deliveries being requested
* Any extra shipping costs
* Date of delivery (not pictured below)

Please build a dynamic interface, similar to our [current checkout](https://www.bloomandwild.com/send-flowers), in Angular (and any other front end libraries or frameworks that you might find useful) that updates its pricing according to your selection.

The data needed is returned by the checkout/flowers-endpoint factory, this is a (scaled down) JSON representation of what our API actually returns, the bouquets you need to populate your checkout with are stored in the `collections[0].skus` array, inside each sku you can find pricing information in the `pricings` array (just pluck the pricing object for `quantity: 1` and use that) images are inside `default_bouquet` object.

Feel free to adjust the design, but try to make it **clean and minimal**.

We'll be looking for things like:
* A clean and simple solution
* Done in a standard way
* Good understanding of where to use libraries and where not to

Bonus points for:
* Unit tests
* Make days starting 23rd December ending 3rd January cost £3.50 more for the first delivery

Sample design (minus some form of date picker which is required):
![design](http://i.imgur.com/xXDJs0d.png)

## Setting up the project

`npm install`
Then to serve it `npm start` and navigate to `http://localhost:8000/app/index.html`, any questions please don't hesitate to ask us!
