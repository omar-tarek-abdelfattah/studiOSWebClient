import { z } from "zod";

export const tenantSchema = z.object({
  name: z.string().min(2, "Tenant name must be at least 2 characters"),
  domain: z.string().min(3, "Domain must be at least 3 characters").regex(/^[a-z0-9-]+$/, "Domain can only contain lowercase letters, numbers, and hyphens"),
  status: z.enum(["ACTIVE", "INACTIVE", "SUSPENDED"]),
});

export type TenantFormData = z.infer<typeof tenantSchema>;
