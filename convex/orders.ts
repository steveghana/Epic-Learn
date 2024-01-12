import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { v4 as uuidv4 } from "uuid";

export const setOrderStatus = mutation({
  args: {
    orderId: v.id("order"),
    status: v.union(
      v.literal("new"),
      v.literal("inProgress"),
      v.literal("readyForPickup"),
      v.literal("completed")
    ),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      return {
        error: "invalid user",
      };
    }

    const order = await ctx.db.patch(args.orderId, {
      status: args.status,
    });

    return order;
  },
});

export const createOrder = mutation({
  args: {
    materialType: v.string(),
    itemType: v.string(),
    upgrades: v.any(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      return {
        error: "invalid user",
      };
    }

    const order = await ctx.db.insert("order", {
      user: user,
      orderId: uuidv4(),
      userId: user.subject,
      itemType: args.itemType,
      materialType: args.materialType,
      upgrades: args.upgrades,
      status: "new",
    });

    return order;
  },
});

export const getOrders = query({
  args: {
    status: v.union(
      v.literal("new"),
      v.literal("inProgress"),
      v.literal("readyForPickup"),
      v.literal("completed")
    ),
  },
  handler: async (ctx, args) => {
    return ctx.db
      .query("order")
      .withIndex("index_status", (q) => q.eq("status", args.status))
      .collect();
  },
});

export const getOrderCounts = query({
  handler: async (ctx) => {
    const orders = await ctx.db.query("order").collect();
    return {
      new: orders.filter((repair) => repair.status === "new").length,
      inProgress: orders.filter((repair) => repair.status === "inProgress")
        .length,
      readyForPickup: orders.filter(
        (repair) => repair.status === "readyForPickup"
      ).length,
      completed: orders.filter((repair) => repair.status === "completed")
        .length,
    };
  },
});
