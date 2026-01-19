import { redirect } from 'next/navigation';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Simple Admin Shell */}
            <div className="p-4 border-b bg-white flex justify-between items-center shadow-sm">
                <h1 className="font-bold text-xl">GHANRY ADMIN</h1>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">RESTRICTED AREA</span>
            </div>
            {children}
        </div>
    );
}
