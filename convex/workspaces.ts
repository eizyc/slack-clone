import { v } from "convex/values";

import { getAuthUserId } from "@convex-dev/auth/server";
import { auth } from "./auth";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    // TODO: Generate a join code
    const joinCode = '123456';

    const workspaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userId,
      joinCode,
    });


    return workspaceId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {

    const workspaces = await ctx.db
      .query("workspaces")
      .collect();

    return workspaces;
  },
});

