import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.string(),

    // Shipping information
    address: v.string(),
    city: v.string(),
    country: v.string(),
    zipCode: v.string(),

    // Payment details
    paymentMethod: v.union(v.literal("e-Money"), v.literal("Cash on Delivery")),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),

    // Order items from cart
    items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        amount: v.number(),
        imageUrl: v.optional(v.string()),
      })
    ),

    // Order totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),

    // Order metadata
    orderId: v.string(),
    status: v.string(), // e.g., "pending", "confirmed", "shipped", "delivered"
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_orderId", ["orderId"])
    .index("by_createdAt", ["createdAt"]),
});
