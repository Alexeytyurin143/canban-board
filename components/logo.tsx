import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const headingFont = Montserrat({
	subsets: ['cyrillic'],
	weight: ['700'],
})

const Logo = () => {
	return (
		<Link href='/' className='hidden md:flex'>
			<div className='hover:opacity-75 transition items-center gap-x-2 flex'>
				<Image
					src='/static/logo.svg'
					alt='Logo'
					height={30}
					width={30}
				/>
				<p
					className={cn(
						'text-large text-neutral-700',
						headingFont.className
					)}
				>
					Taskify
				</p>
			</div>
		</Link>
	)
}
export default Logo
