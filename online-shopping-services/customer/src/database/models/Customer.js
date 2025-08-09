const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
    email: String,
    password: String,
    salt: String,
    phone: String,
    address: [{ type: Schema.Types.ObjectId, ref: "address", require: true }],
    cart: [
      {
        product: {
          _id: { type: String, require: true },
          name: { type: String, require: true },
          price: { type: Number, require: true },
          banner: { type: String, require: true },
        },
        unit: { type: Number, require: true },
      },
    ],
    wishlist: [
      {
        _id: { type: String, require: true },
        name: { type: String, require: true },
        description: { type: String, require: true },
        available: { type: Boolean, require: true },
        price: { type: Number, require: true },
        banner: { type: String, require: true },
      },
    ],
    orders: [
      {
        _id: { type: String, require: true },
        amount: { type: Number, require: true },
        date: { type: Date, require: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("customer", CustomerSchema);
