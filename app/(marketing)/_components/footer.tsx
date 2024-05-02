import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
	return (
		<div className='fixed bottom-0 w-full p-4 border-t bg-slate-100'>
			<div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
				<Logo />
				<div className='md:space-x-4 md:block md:w-auto flex items-center justify-center flex-wrap w-full md:flex-nowrap md:justify-between'>
					<Button size='sm' variant='ghost'>
						Политика конфиденциальности
					</Button>
					<Button size='sm' variant='ghost'>
						Пользовательское соглашение
					</Button>
				</div>
			</div>
		</div>
	)
}
