import React from 'react'
import BranchesHeader from './BranchesComponent/BranchesHeader'
import BranchesMap from './BranchesComponent/BranchesMap'

const Branches = () => {
    return (
        <div className='pt-[80px]'>
            <BranchesHeader />
            <BranchesMap />
        </div>
    )
}

export default Branches