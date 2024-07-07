import type { Book, CartItem } from '@/types/app.type.ts'

export default function (data: Book): Omit<CartItem, 'quantity'> {
    return {
        id: data.id,
        name: data.title,
        imagePath: data.coverImageUrl,
        price: data.price,
    }
}
