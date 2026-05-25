

export interface MetodsType {
    method: "کارت" | "درگاه" | "نقد";
}

export type formPayMethod = { id: 1, name: "کارت", value: 'card' } | { id: 2, name: "درگاه", value: 'bankTransfer' } | { id: 3, name: "نقد", value: 'cash' }
