import { NumberValueAccessor } from "@angular/forms";

export interface Task {
    id?: number; // optional
    text: string;
    day: string;
    reminder: boolean;
}