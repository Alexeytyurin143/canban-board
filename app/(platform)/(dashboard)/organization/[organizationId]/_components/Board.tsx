import { deleteBoard } from '@/actions/delete-board'
import { Button } from '@/components/ui/button'

interface BoardProps {
	title: string
	id: string
}

export const Board = ({ id, title }: BoardProps) => {
	const deleteBoardWithId = deleteBoard.bind(null, id)

	return (
		<form action={deleteBoardWithId} className='flex items-center gap-x-2'>
			<p>Название доски: {title}</p>
			<Button type='submit' variant='destructive' size='sm'>
				Удалить
			</Button>
		</form>
	)
}
