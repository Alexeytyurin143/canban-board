import { OrganizationList } from '@clerk/nextjs'

const CreateOrganiztionPage = () => {
	return (
		<OrganizationList
			hidePersonal
			afterSelectOrganizationUrl='/organization/:id'
			afterCreateOrganizationUrl='/organization/:id'
		/>
	)
}
export default CreateOrganiztionPage
