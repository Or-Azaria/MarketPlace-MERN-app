const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    bnNumber: String,
    name: { type: String, required: true },
    description: { type: String, required: true },
    logo: String,
    lightlogo: String,
    darklogo: String,
    coverImage: String,
    phone: { type: String, required: true, min: 9, unique: true },
    email: { type: String, required: true, unique: true, min: 8, max: 50 },
    department_id :{ type: mongoose.Types.ObjectId, ref: "Departments" },
    sections: { type:[mongoose.Types.ObjectId], ref: "sections" },
    Products :{ type:[mongoose.Types.ObjectId], ref: "Products" },
    address: {
      type: Object,
      required: true,
    },
    lastUpdate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String},
  },
  { timestamps: true }
);
const model = mongoose.model("stores", StoreSchema);
module.exports = model;
