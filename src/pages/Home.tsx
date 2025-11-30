'use client';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProjects, createProject, updateProject, deleteProject } from '../api/projectApi';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { EmptyState } from '../components/EmptyState';
import { Modal } from '../components/Modal';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { useRole } from '../hooks/useRole';
import { useEffect, useState } from 'react';
import { FolderKanban, AlertTriangle, Plus, Edit2, Trash2 } from 'lucide-react';
import { Project, CreateProjectInput } from '../types';
import toast from 'react-hot-toast';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';

export const Home = () => {
    const navigate = useNavigate();
    const { role } = useRole();
    const queryClient = useQueryClient();
    const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);

    // Redirect to role selection if no role
    useEffect(() => {
        if (!role) {
            navigate('/select-role', { replace: true });
        }
    }, [role, navigate]);

    const { data: projects, isLoading: projectsLoading, error } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    });


    const createProjectMutation = useMutation({
        mutationFn: createProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            setIsCreateProjectOpen(false);
            toast.success('تم إنشاء المشروع بنجاح');
        },
        onError: () => {
            toast.error('فشل إنشاء المشروع');
        },
    });

    const updateProjectMutation = useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<Project> }) =>
            updateProject(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            setEditingProject(null);
            toast.success('تم تحديث المشروع بنجاح');
        },
        onError: () => {
            toast.error('فشل تحديث المشروع');
        },
    });

    const deleteProjectMutation = useMutation({
        mutationFn: deleteProject,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
            setProjectToDelete(null);
            toast.success('تم حذف المشروع بنجاح');
        },
        onError: () => {
            toast.error('فشل حذف المشروع');
        },
    });

    const activeProjects = projects?.filter(p => p.active);
    const isAdminOrSupervisor = role === 'admin' || role === 'supervisor';

    if (projectsLoading) {
        return <LoadingSpinner message="جاري تحميل البيانات..." />;
    }

    if (error) {
        return (
            <EmptyState
                icon={<AlertTriangle className="w-16 h-16 text-red-500" />}
                title="خطأ في تحميل المشاريع"
                description="حدث خطأ أثناء تحميل المشاريع. يرجى المحاولة مرة أخرى."
                action={{ label: 'إعادة المحاولة', onClick: () => window.location.reload() }}
            />
        );
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-6 flex flex-col sm:flex-row-reverse items-start sm:items-center justify-between gap-4">
                {isAdminOrSupervisor && (
                    <button
                        onClick={() => setIsCreateProjectOpen(true)}
                        className="btn-primary flex items-center gap-2"
                    >
                        <Plus className="w-5 h-5" />
                        إضافة مشروع جديد
                    </button>
                )}
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-primary">المشاريع</h1>
                    <p className="text-lg text-textSecondary dark:text-textSecondary-dark">
                        اختر مشروعًا لعرض وإدارة المهام الخاصة به
                    </p>
                </div>
            </div>
            {/* Projects Grid */}
            {activeProjects && activeProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {activeProjects.map((project) => (
                        <div
                            key={project.id}
                            className="card group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="flex items-start gap-4 flex-1 cursor-pointer"
                                    onClick={() => navigate(`/app/project/${project.id}`)}
                                >
                                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                        <FolderKanban className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {project.name}
                                        </h3>
                                        {project.description && (
                                            <p className="text-textSecondary dark:text-textSecondary-dark text-sm line-clamp-2">
                                                {project.description}
                                            </p>
                                        )}
                                        <div className="mt-3 flex items-center gap-2 text-xs text-textSecondary dark:text-textSecondary-dark">
                                            <span className="badge bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                                نشط
                                            </span>
                                            {project.created_at && (
                                                <span>
                                                    {new Date(project.created_at).toLocaleDateString('ar-EG')}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {isAdminOrSupervisor && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setEditingProject(project);
                                            }}
                                            className="text-sm btn-secondary py-1 px-2"
                                            title="تعديل"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setProjectToDelete(project);
                                            }}
                                            className="text-sm bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-700 dark:text-red-400 py-1 px-2 rounded-md transition-colors"
                                            title="حذف"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <EmptyState
                    icon={<FolderKanban className="w-16 h-16 text-gray-400" />}
                    title="لا توجد مشاريع"
                    description="لم يتم العثور على مشاريع نشطة."
                />
            )}

            {/* Create/Edit Project Modal */}
            <ProjectFormModal
                isOpen={isCreateProjectOpen || !!editingProject}
                onClose={() => {
                    setIsCreateProjectOpen(false);
                    setEditingProject(null);
                }}
                project={editingProject}
                onSubmit={(data) => {
                    if (editingProject) {
                        updateProjectMutation.mutate({ id: editingProject.id, data });
                    } else {
                        createProjectMutation.mutate({ ...data, created_by: 1 });
                    }
                }}
            />

            {/* Delete Project Confirmation */}
            <ConfirmDialog
                isOpen={!!projectToDelete}
                onClose={() => setProjectToDelete(null)}
                onConfirm={() => {
                    if (projectToDelete) {
                        deleteProjectMutation.mutate(projectToDelete.id);
                    }
                }}
                title="تأكيد حذف المشروع"
                message={`هل أنت متأكد من حذف المشروع "${projectToDelete?.name}"؟ لا يمكن التراجع عن هذا الإجراء.`}
                confirmText="حذف"
                cancelText="إلغاء"
            />
        </div>
    );
};

// Project Form Modal Component
interface ProjectFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    onSubmit: (data: CreateProjectInput) => void;
}

const ProjectFormModal: React.FC<ProjectFormModalProps> = ({
    isOpen,
    onClose,
    project,
    onSubmit,
}) => {
    const [formData, setFormData] = useState<CreateProjectInput>({
        name: '',
        description: '',
        team_id: undefined,
    });

    useEffect(() => {
        if (project) {
            setFormData({
                name: project.name,
                description: project.description || '',
                team_id: project.team_id || undefined,
            });
        } else {
            setFormData({
                name: '',
                description: '',
                team_id: undefined,
            });
        }
    }, [project, isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            toast.error('يجب إدخال اسم المشروع');
            return;
        }
        onSubmit(formData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={project ? 'تعديل المشروع' : 'إضافة مشروع جديد'}
        >
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">اسم المشروع *</Label>
                    <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="أدخل اسم المشروع"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">الوصف</Label>
                    <textarea
                        id="description"
                        value={formData.description || ''}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="أدخل وصف المشروع"
                        className="input min-h-[100px]"
                        rows={4}
                    />
                </div>

                <div className="flex gap-2 justify-start pt-4">
                    <Button type="button" variant="outline" onClick={onClose}>
                        إلغاء
                    </Button>
                    <Button type="submit">
                        {project ? 'حفظ التعديلات' : 'إنشاء المشروع'}
                    </Button>
                </div>
            </form>
        </Modal>
    );
};
