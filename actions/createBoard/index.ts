'use server'

import { InputType, ReturnType } from './types'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '@/lib/createSafeAction'
import { CreateBoard } from './schema'

const handler = async (data: InputType): Promise<ReturnType> => {
	const { title } = data

	let board

	try {
		board = await db.board.create({
			data: {
				title,
			},
		})
	} catch (error) {
		return {
			error: 'Ошибка БД',
		}
	}

	revalidatePath(`/board/${board.id}`)
	return { data: board }
}

export const createBoard = createSafeAction(CreateBoard, handler)
