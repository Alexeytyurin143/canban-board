import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import { MobileSidebar } from './MobileSidebar'
import { FormPopover } from '@/components/form/form-popover'

export const Navbar = () => {
	return (
		<nav className='fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center'>
			<MobileSidebar />
			<div className='flex items-center gap-x-4'>
				<div className='hidden md:flex'>
					<Logo />
				</div>
				<FormPopover align='start' side='bottom' sideOffset={18}>
					<Button
						variant='primary'
						size='sm'
						className='rounded-sm block md:h-auto md:py-1.5 md:px-2'
					>
						<span className='hidden md:inline'>Создать</span>

						<span className='md:hidden'>
							<Plus className='h-4 w-4' />
						</span>
					</Button>
				</FormPopover>
			</div>
			<div className='ml-auto flex items-center gap-x-2'>
				<OrganizationSwitcher
					hidePersonal
					afterSelectOrganizationUrl='/organization/:id'
					afterCreateOrganizationUrl='/organization/:id'
					afterLeaveOrganizationUrl='/select-org'
				/>
				<UserButton afterSignOutUrl='/' />
			</div>
		</nav>
	)
}
