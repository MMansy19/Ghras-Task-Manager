import { DateTime } from 'luxon';
import { Edit2, Trash2, Clock, Calendar } from 'lucide-react';
import { Task, TaskPriority, PRIORITY_LABELS } from '../types';

interface TaskCardProps {
    task: Task;
    onEdit?: () => void;
    onDelete?: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
    const formatDate = (dateString: string | null | undefined) => {
        if (!dateString) return null;
        return DateTime.fromISO(dateString).setLocale('ar').toFormat('dd MMM');
    };

    return (
        <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                    <h4 className="font-bold text-sm line-clamp-2">{task.title}</h4>
                </div>
                {(onEdit || onDelete) && (
                    <div className="flex gap-1">
                        {onEdit && (
                            <button
                                onClick={onEdit}
                                className="text-gray-500 hover:text-primary transition-colors p-1"
                                aria-label="تعديل"
                            >
                                <Edit2 className="w-4 h-4" />
                            </button>
                        )}
                        {onDelete && (
                            <button
                                onClick={onDelete}
                                className="text-gray-500 hover:text-red-600 transition-colors p-1"
                                aria-label="حذف"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                )}
            </div>

            {task.description && (
                <p className="text-xs text-textSecondary dark:text-textSecondary-dark line-clamp-2">
                    {task.description}
                </p>
            )}

            <div className="flex items-center gap-2 flex-wrap">
                <span className={`badge-priority-${task.priority}`}>
                    {PRIORITY_LABELS[task.priority as TaskPriority]}
                </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-textSecondary dark:text-textSecondary-dark flex-wrap">
                {task.due_date && (
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(task.due_date)}</span>
                    </div>
                )}

                {task.work_hours > 0 && (
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{task.work_hours} ساعة</span>
                    </div>
                )}

                {task.assignee_id && (
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                            {task.assignee_id}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
