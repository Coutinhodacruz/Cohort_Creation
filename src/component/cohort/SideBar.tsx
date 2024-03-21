import React from 'react';

import BriefCase from '@/assets/img/BriefCaseIcon';
import PeopleIcon from '@/assets/img/PeopleIcon';
import BookIcon from '@/assets/img/BookIcon';
import UserIcon from '@/assets/img/UserIcon';
import NavItem from './NavItem';

interface NavProps{
    onClick: (item: string) => void,

    selectedItem: string
}

const SideBar: React.FC<NavProps> = ({ onClick, selectedItem }) => {
    return (
        <div className='pt-16 border'>
            <NavItem Icon={PeopleIcon} item={"cohorts"} iconProps={{color: selectedItem === 'cohorts' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
            <NavItem Icon={BookIcon} item={"programs"} iconProps={{color: selectedItem === 'programs' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
            <NavItem Icon={BriefCase} item={"instructors"} iconProps={{color: selectedItem === 'instructors' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />
            <NavItem Icon={UserIcon} item={"learners"} iconProps={{color: selectedItem === 'learners' ? "#008EEF" : "#475661"}} onClick={onClick} selectedItem={selectedItem} />

        </div>
    )
}

export default SideBar;