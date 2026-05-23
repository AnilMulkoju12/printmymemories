"use client";

import AdminLayoutWrapper from "./components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <AdminLayoutWrapper>
      {children}
    </AdminLayoutWrapper>
  );
}