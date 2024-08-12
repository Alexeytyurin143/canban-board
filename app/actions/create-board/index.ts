'use server'

import { InputType, ReturnType } from './types'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { createSafeAction } from '@/lib/createSafeAction'
import { CreateBoard } from './schema'
import { auth } from '@clerk/nextjs/server'

const handler = async (data: InputType): Promise<ReturnType> => {
	const { userId, orgId } = auth()

	if (!userId || !orgId) {
		return {
			error: 'Unauthorized',
		}
	}

	const { title, image } = data

	const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
		image.split('|')

	console.log({
		imageId,
		imageThumbUrl,
		imageFullUrl,
		imageLinkHTML,
		imageUserName,
	})

	if (
		!imageId ||
		!imageThumbUrl ||
		!imageFullUrl ||
		!imageUserName ||
		!imageLinkHTML
	) {
		return {
			error: 'Недостаточно данных. Ошибка при создании доски.',
		}
	}

	let board

	try {
		board = await db.board.create({
			data: {
				title,
				orgId,
				imageId,
				imageThumbUrl,
				imageFullUrl,
				imageUserName,
				imageLinkHTML,
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
