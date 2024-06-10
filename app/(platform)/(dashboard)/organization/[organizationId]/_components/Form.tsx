'use client'

import { FormInput } from './FormInput'
import { FormButton } from './FormButton'
import { useAction } from '@/hooks/useAction'
import { createBoard } from '@/actions/createBoard'

export const Form = () => {
	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: (data) => {
			console.log(data, 'Успешно')
		},
		onError: (error) => {
			console.error(error)
		},
	})

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string

		execute({ title })
	}
	return (
		<form action={onSubmit}>
			<div className='flex flex-col space-y-2'>
				<FormInput errors={fieldErrors} />
			</div>
			<FormButton />
		</form>
	)
}
