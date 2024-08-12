import { z } from 'zod'

export const CreateBoard = z.object({
	title: z
		.string({
			required_error: 'Название обязательно',
			invalid_type_error: 'Название обязательно',
		})
		.min(3, {
			message: 'Длина названия должна быть не меньше 3-х символов',
		}),
	image: z.string({
		required_error: 'Изображение обязательно',
		invalid_type_error: 'Изображение обязательно',
	}),
})
