'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, fetchTeams } from '../api/mockApi';
import { useRole } from '../hooks/useRole';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ROLE_LABELS } from '../types';
import { User, Mail, MapPin, Briefcase, Calendar, Clock, Users as UsersIcon } from 'lucide-react';

export const Profile = () => {
    const { role: userRole } = useRole();

    const {
        data: users = [],
        isLoading,
    } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });

    const { data: teams = [] } = useQuery({
        queryKey: ['teams'],
        queryFn: fetchTeams,
    });

    if (isLoading) return <LoadingSpinner message="جاري تحميل البيانات..." />;

    // Get current user profile (use first user for demo)
    const currentUser = users.find(u => u.id === 1);

    if (!currentUser) {
        return (
            <div className="text-center py-12">
                <p className="text-red-600">لم يتم العثور على ملف المستخدم</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-2xl">
            <div>
                <h1 className="text-3xl font-bold">ملفي الشخصي</h1>
                <p className="text-textSecondary dark:text-textSecondary-dark mt-2">معلومات الملف الشخصي والتفاصيل الأساسية</p>
            </div>

            {/* Profile Header Card */}
            <div className="card">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-4xl font-bold text-primary flex-shrink-0">
                        {currentUser.name.charAt(0)}
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold">{currentUser.name}</h2>
                        <p className="text-textSecondary dark:text-textSecondary-dark mt-1">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                                {ROLE_LABELS[currentUser.role]}
                            </span>
                        </p>
                        <p className="text-sm text-textSecondary dark:text-textSecondary-dark mt-3">
                            {currentUser.status ? '✓ نشط' : '✗ معطل'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="card space-y-4">
                <h3 className="text-lg font-bold">معلومات التواصل</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">البريد الإلكتروني</p>
                            <p className="font-medium">{currentUser.email}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">معرف التلجرام</p>
                            <p className="font-medium">{currentUser.telegram_id || '-'}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Information */}
            <div className="card space-y-4">
                <h3 className="text-lg font-bold">المعلومات الوظيفية</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">الحقل الوظيفي</p>
                            <p className="font-medium">{currentUser.job_field || '-'}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">سنوات الخبرة</p>
                            <p className="font-medium">{currentUser.experience_years ? `${currentUser.experience_years} سنوات` : '-'}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">ساعات العمل الأسبوعية</p>
                            <p className="font-medium">{currentUser.weekly_hours ? `${currentUser.weekly_hours} ساعة` : '-'}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">الدولة</p>
                            <p className="font-medium">{currentUser.country || '-'}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Personal Information */}
            <div className="card space-y-4">
                <h3 className="text-lg font-bold">المعلومات الشخصية</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-sm text-textSecondary dark:text-textSecondary-dark">العمر</p>
                            <p className="font-medium">{currentUser.age ? `${currentUser.age} سنة` : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Teams */}
            {currentUser.teams && currentUser.teams.length > 0 && (
                <div className="card space-y-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <UsersIcon className="w-5 h-5 text-primary" />
                        الفرق المشارك فيها
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentUser.teams.map((teamId) => {
                            const team = teams.find(t => t.id === teamId);
                            return (
                                <div
                                    key={teamId}
                                    className="p-3 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 dark:border-primary/30"
                                >
                                    <p className="text-sm font-medium text-primary">
                                        {team ? team.name : `فريق #${teamId}`}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Account Information */}
            <div className="card space-y-4 border-l-4 border-blue-500">
                <h3 className="text-lg font-bold">معلومات الحساب</h3>

                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-textSecondary dark:text-textSecondary-dark">تاريخ الإنشاء:</span>
                        <span className="font-medium">
                            {currentUser.created_at
                                ? new Date(currentUser.created_at).toLocaleDateString('ar-EG')
                                : '-'}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-textSecondary dark:text-textSecondary-dark">آخر تحديث:</span>
                        <span className="font-medium">
                            {currentUser.updated_at
                                ? new Date(currentUser.updated_at).toLocaleDateString('ar-EG')
                                : '-'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Note for non-admins */}
            {userRole === 'volunteer' && (
                <div className="card bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                        <span className="font-medium">ملاحظة:</span> يمكنك فقط عرض ملفك الشخصي. لتعديل معلوماتك، يرجى التواصل مع المسؤول.
                    </p>
                </div>
            )}
        </div>
    );
};
