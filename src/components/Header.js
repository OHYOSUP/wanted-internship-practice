import React from 'react'
import { BASE_URL } from '../baseUrl'
function Header() {
  return (
    <>
      <h1>{BASE_URL.OrganizationName} / {BASE_URL.RepositoryName}</h1>
    </>
  )
}

export default Header