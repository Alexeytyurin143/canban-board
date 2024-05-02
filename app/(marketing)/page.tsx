import localFont from 'next/font/local'
import Link from 'next/link'
import { Medal } from 'lucide-react'
import { Nunito_Sans, Montserrat } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const headingFont = Montserrat({
	subsets: ['cyrillic'],
	weight: ['600'],
})

const textFont = Nunito_Sans({
	subsets: ['cyrillic'],
	weight: ['400'],
})

const MarketingPage = () => {
	return (
		<div className='flex items-center justify-center flex-col'>
			<div
				className={cn(
					'flex items-center justify-center flex-col',
					headingFont.className
				)}
			>
				<div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
					<Medal className='h-6 w-6 me-2' />
					Менеджер задач №1
				</div>
				<h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
					Taskify помогает команде продвигать
				</h1>
				<div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
					работу вперед.
				</div>
			</div>
			<div
				className={cn(
					'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
					textFont.className
				)}
			>
				Сотрудничайте, управляйте продуктами и достигайте новых вершин
				производительности. От высотки до домашнего офиса - ваша команда
				работает по-своему, и все это можно реализовать с помощью
				Taskify.
			</div>
			<Button className='mt-6' size='lg' asChild>
				<Link href='/sign-up'>Получите Taskify бесплатно</Link>
			</Button>
		</div>
	)
}
export default MarketingPage
