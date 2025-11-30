'use client';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../hooks/useRole';
import { UserRole, ROLE_LABELS } from '../types';
import { ShieldCheck, UserCheck, UserCog, Info } from 'lucide-react';

export const RoleSelection = () => {
    const navigate = useNavigate();
    const { setRole } = useRole();

    const handleRoleSelect = (selectedRole: UserRole) => {
        setRole(selectedRole);
        navigate('/app', { replace: true });
    };

    const roles: { role: UserRole; icon: typeof ShieldCheck; description: string }[] = [
        {
            role: 'admin',
            icon: ShieldCheck,
            description: 'إدارة كاملة للنظام والمستخدمين',
        },
        {
            role: 'supervisor',
            icon: UserCog,
            description: 'إدارة المهام والمستخدمين',
        },
        {
            role: 'volunteer',
            icon: UserCheck,
            description: 'إدارة المهام الخاصة',
        },
    ];

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 p-4 relative"
        >
            {/* Background Image with Lazy Loading */}
            <img
                src="/home-bg.webp"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
            />

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/90 backdrop-blur-sm"></div>

            <div className="max-w-4xl w-full relative z-10">
                <div className="text-center mb-12">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/logo.png"
                            alt="شعار غراس"
                            fetchPriority="high"
                            width="128"
                            height="128"
                            className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-lg"
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black mb-4 text-primary drop-shadow-md">
                        غراس مدير المهام
                    </h1>
                    <p className="text-lg text-textSecondary dark:text-textSecondary-dark font-semibold">
                        نظام إدارة المهام لفرق أكاديمية غراس العلم
                    </p>
                </div>

                <div className="card mb-6">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        اختر دورك للمتابعة
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {roles.map(({ role, icon: Icon, description }) => (
                            <button
                                key={role}
                                onClick={() => handleRoleSelect(role)}
                                className="card-hover text-center p-6 group transition-all"
                            >
                                <div className="mb-3 flex justify-center">
                                    <Icon className="w-16 h-16 text-primary group-hover:text-primary-dark transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {ROLE_LABELS[role]}
                                </h3>
                                <p className="text-sm text-textSecondary dark:text-textSecondary-dark">
                                    {description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center text-sm text-textSecondary dark:text-textSecondary-dark">
                    <p className="flex items-center justify-center gap-2">
                        <Info className="w-4 h-4" />
                        هذا نظام تجريبي يستخدم بيانات وهمية لأغراض التطوير
                    </p>
                </div>
            </div>
        </div>
    );
};
