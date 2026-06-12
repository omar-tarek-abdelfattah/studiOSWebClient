"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "@/utils/api";
import { Table, TableHeader, TableRow, TableCell } from "@repo/ui/table";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { TenantModal } from "../../components/modals/TenantModal";

// Temporary interface until we build the Zod schema
interface Tenant {
  id: string;
  name: string;
  domain: string;
  status: string;
}

export default function AdminDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // TanStack Query to fetch tenants
  const { data: tenants, isLoading, error } = useQuery<Tenant[]>({
    queryKey: ["tenants"],
    queryFn: () => fetchApi("/api/v1/system/tenants"),
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-200">Registered Tenants</h2>
        <Button onClick={() => setIsModalOpen(true)}>Add New Tenant</Button>
      </div>

      {isLoading ? (
        <div className="p-8 text-center text-gray-500">Loading tenants...</div>
      ) : error ? (
        <div className="p-8 text-center text-red-500">
          Failed to load tenants. (Backend might not be configured for this route yet).
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Tenant Name</TableCell>
              <TableCell isHeader>Domain</TableCell>
              <TableCell isHeader>Status</TableCell>
              <TableCell isHeader>Actions</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {tenants?.length === 0 ? (
              <TableRow>
                <TableCell className="text-center text-gray-500" /* colSpan={4} */>
                  No tenants found.
                </TableCell>
              </TableRow>
            ) : (
              tenants?.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell className="text-white font-medium">{tenant.name}</TableCell>
                  <TableCell className="text-gray-400">{tenant.domain}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 text-xs font-medium bg-[#00f2ff]/10 text-[#00f2ff] rounded-full border border-[#00f2ff]/20">
                      {tenant.status || "ACTIVE"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </tbody>
        </Table>
      )}

      {/* The Tenant Modal (We will create this component next) */}
      {isModalOpen && (
        <TenantModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
