import { TaskPriority, PRIORITY_CONFIG } from '../types';

interface PriorityBadgeProps {
    priority: TaskPriority;
    className?: string;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, className = '' }) => {
    const config = PRIORITY_CONFIG[priority];

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bgClass} ${config.textClass} ${className}`}
        >
            {config.label}
        </span>
    );
};
