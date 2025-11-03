import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create a new order
export const createOrder = mutation({
  args: {
    // Customer billing details
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
  },
  handler: async (ctx, args) => {
    const order_Id = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)
      .toUpperCase()}`;

    const orderId = await ctx.db.insert("orders", {
      ...args,
      orderId: order_Id,
      status: "pending",
      createdAt: Date.now(),
    });

    return { orderId: orderId, orderNumber: orderId };
  },
});

// Get all orders (optional - for admin/testing)
export const getOrders = query({
  handler: async (ctx) => {
    return await ctx.db.query("orders").order("desc").collect();
  },
});

// Get orders by email
export const getOrdersByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .order("desc")
      .collect();
  },
});

// Get single order by orderId
export const getOrderById = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", args.orderId))
      .first();
  },
});

// Update order status
export const updateOrderStatus = mutation({
  args: {
    orderId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", args.orderId))
      .first();

    if (!order) {
      throw new Error("Order not found");
    }

    await ctx.db.patch(order._id, {
      status: args.status,
    });

    return { success: true };
  },
});
