import React from 'react'
import TrustUsMain from "../../widgets/TrustUs/TrustUsMain"
import Preview from "../../widgets/TrustUs/Preview"
import Musicians from "../../widgets/TrustUs/Musicians"
import Order from "../../widgets/TrustUs/Order"
import Header from '../../widgets/Header'

const TrustUs = () => {
  return (
    <div>
        <Header />
        <TrustUsMain />
        <Preview />
        <Musicians />
        <Order />
    </div>
  )
}

export default TrustUs