'use client'

import { X } from 'lucide-react'
import { Button } from '../ui/button'
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverTrigger,
} from '../ui/popover'
import { FormInput } from './form-input'
import { FormSubmit } from './form-submit'
import { useAction } from '@/hooks/useAction'
import { createBoard } from '@/app/actions/create-board'
import { toast } from 'sonner'
import { FormPicker } from './form-picker'
import { ElementRef, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface FormPopoverProps {
	children: React.ReactNode
	side?: 'left' | 'right' | 'top' | 'bottom'
	align?: 'start' | 'center' | 'end'
	sideOffset?: number
}

export const FormPopover = ({
	children,
	side = 'bottom',
	align,
	sideOffset = 0,
}: FormPopoverProps) => {
	const router = useRouter()
	const closeRef = useRef<ElementRef<'button'>>(null)

	const { execute, fieldErrors } = useAction(createBoard, {
		onSuccess: (data) => {
			toast.success('Доска создана')
			closeRef.current?.click()
			router.push(`/board/${data.id}`)
		},
		onError: (error) => {
			toast.error(error)
		},
	})

	const onSubmit = (formData: FormData) => {
		const title = formData.get('title') as string
		const image = formData.get('image') as string

		execute({ title, image })
	}

	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent
				align={align}
				className='w-80 pt-3'
				side={side}
				sideOffset={sideOffset}
			>
				<div className='text-sm font-medium text-center text-neutral-600 pb-4'>
					Создать доску
				</div>
				<PopoverClose ref={closeRef} asChild>
					<Button
						className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
						variant='ghost'
					>
						<X className='h-4 w-4' />
					</Button>
				</PopoverClose>
				<form action={onSubmit} className='space-y-4'>
					<div className='space-y-4'>
						<FormPicker id='image' errors={fieldErrors} />
						<FormInput
							id='title'
							label='Название доски'
							type='text'
							errors={fieldErrors}
						/>
					</div>
					<FormSubmit className='w-full'>Создать</FormSubmit>
				</form>
			</PopoverContent>
		</Popover>
	)
}
