"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchApi } from "@/utils/api";
import { Modal } from "@repo/ui/modal";
import { Button } from "@repo/ui/button";
import { tenantSchema, type TenantFormData } from "@/validation/tenant";

export function TenantModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TenantFormData>({
    resolver: zodResolver(tenantSchema),
    defaultValues: {
      status: "ACTIVE",
    },
  });

  const mutation = useMutation({
    mutationFn: (newTenant: TenantFormData) =>
      fetchApi("/api/v1/system/tenants", {
        method: "POST",
        body: JSON.stringify(newTenant),
      }),
    onSuccess: () => {
      // Invalidate and refetch the tenants query
      queryClient.invalidateQueries({ queryKey: ["tenants"] });
      reset();
      onClose();
    },
    onError: (error) => {
      console.error("Failed to create tenant:", error);
      alert("Failed to create tenant. Please check the console or ensure backend is running.");
    },
  });

  const onSubmit = (data: TenantFormData) => {
    mutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Tenant">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Studio Name
          </label>
          <input
            {...register("name")}
            placeholder="e.g., Gr8Nik Studio"
            className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-[#00f2ff] text-white transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Subdomain Prefix
          </label>
          <div className="flex items-center">
            <input
              {...register("domain")}
              placeholder="gr8nik"
              className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-l-lg focus:outline-none focus:border-[#00f2ff] text-white transition-colors"
            />
            <span className="px-4 py-2 bg-gray-900 border border-l-0 border-gray-800 rounded-r-lg text-gray-500">
              .studios.com
            </span>
          </div>
          {errors.domain && (
            <p className="mt-1 text-sm text-red-500">{errors.domain.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Status
          </label>
          <select
            {...register("status")}
            className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-[#00f2ff] text-white appearance-none"
          >
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="SUSPENDED">Suspended</option>
          </select>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting || mutation.isPending}>
            {isSubmitting || mutation.isPending ? "Saving..." : "Save Tenant"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
