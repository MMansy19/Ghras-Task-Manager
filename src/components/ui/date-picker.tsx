import * as React from "react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    value?: string
    onChange: (date: string) => void
    placeholder?: string
    className?: string
}

export function DatePicker({ value, onChange, placeholder = "اختر التاريخ", className }: DatePickerProps) {
    const [date, setDate] = React.useState<Date | undefined>(
        value ? new Date(value) : undefined
    )

    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate)
        if (selectedDate) {
            onChange(format(selectedDate, "yyyy-MM-dd"))
        } else {
            onChange("")
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-between text-right font-normal",
                        !date && "text-textSecondary dark:text-textSecondary-dark",
                        className
                    )}
                >
                    {date ? (
                        format(date, "PPP", { locale: ar })
                    ) : (
                        <span>{placeholder}</span>
                    )}
                    <CalendarIcon className="mr-2 h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
