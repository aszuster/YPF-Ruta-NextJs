import { useQuery } from '@tanstack/react-query'
import Unauthorized from 'components/Alerts/Unauthorized'
import AdminIconButton from 'components/buttons/AdminIconButton'
import LayoutAdmin from 'components/layouts/LayoutAdmin'
import TableUsers from 'components/tables/admin/TableUsers'
import AdminTitle from 'components/views/admin/AdminTitle'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { allUsers } from 'services/users'

const UsersAdminPage = () => {
  const { data, isLoading, isError, error } = useQuery(['users'], () =>
    allUsers()
  )
  const router = useRouter()
  const { data: dataSession } = useSession()
  return (
    <LayoutAdmin>
      {dataSession.user.role.toLowerCase() === 'administrador' ? (
        <>
          {/* Title and Filters */}
          <AdminTitle title="Usuarios">
            <AdminIconButton
              action={() => router.push('/admin/users/new_user')}
            >
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 2C14.5523 2 15 2.44772 15 3V7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H14C13.4477 9 13 8.55228 13 8V3C13 2.44772 13.4477 2 14 2Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 4C4 2.89543 4.89543 2 6 2H14.5858C15.1162 2 15.6249 2.21071 16 2.58579L19.4142 6L18.7071 6.70711L19.4142 6C19.7893 6.37507 20 6.88378 20 7.41421V13C20 13.5523 19.5523 14 19 14C18.4477 14 18 13.5523 18 13L18 7.41421L14.5858 4L6 4V20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H6C4.89543 22 4 21.1046 4 20V4Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 20H15V18H21V20Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 22V16H19V22H17Z"
                />
              </svg>
            </AdminIconButton>
          </AdminTitle>

          {/* Table */}
          <TableUsers users={data?.data} isLoading={isLoading} />
        </>
      ) : (
        <Unauthorized />
      )}
    </LayoutAdmin>
  )
}

export default UsersAdminPage
