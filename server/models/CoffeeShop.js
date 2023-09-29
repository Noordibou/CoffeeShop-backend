const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoffeeShopSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String },
  description: { type: String, required: true },
  featuredItems: { type: String },
  cityState: { type: String },
  location: { type: String },
  website: { type: String },
  rating: { type: Number },
  image: { type: String },
  userId: { type: String },
}, { timestamps: true })

CoffeeShopSchema.statics.makeGoogleMapsLink = function (locationString) {
  if (locationString && locationString.startsWith('https://www.google.com/maps')) {
    return locationString;
  } else {
    const locationEncoded = encodeURIComponent(locationString);
    return `https://www.google.com/maps?q=${locationEncoded}`;
  }
};

const CoffeeShop = mongoose.model('CoffeeShop', CoffeeShopSchema);
module.exports = CoffeeShop;