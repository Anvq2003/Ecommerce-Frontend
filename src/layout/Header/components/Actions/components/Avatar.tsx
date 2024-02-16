import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, AvatarIcon } from '@nextui-org/react';
import avatarImg from '/public/assets/images/avatar.png';
import Image from 'next/image';
import React from 'react';
import { useSession } from 'next-auth/client';

export default function MyAvatar() {
  const [session, loading] = useSession();
  console.debug('session', session);
  return (
    <Avatar
      icon={<AvatarIcon />}
      classNames={{
        base: 'bg-gradient-to-br w-[44px] h-[44px] from-[#FFB457] to-[#FF705B]',
        icon: 'text-black/80',
      }}
    />
    // <Dropdown placement="bottom-end">
    //   <DropdownTrigger>
    //     <Avatar
    //       isBordered
    //       radius="sm"
    //       as="button"
    //       className="shadow-[0_4px_14px_2px_rgba(0,0,0,0.08)] transition-transform"
    //       color="secondary"
    //       name="Jason Hughes"
    //       size="md"
    //       src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
    //     />
    //   </DropdownTrigger>
    //   <DropdownMenu aria-label="Profile Actions" variant="flat">
    //     <DropdownItem key="profile" className="h-14 gap-2">
    //       <p className="font-semibold">Signed in as</p>
    //       <p className="font-semibold">zoey@example.com</p>
    //     </DropdownItem>
    //     <DropdownItem key="settings">My Settings</DropdownItem>
    //     <DropdownItem key="team_settings">Team Settings</DropdownItem>
    //     <DropdownItem key="analytics">Analytics</DropdownItem>
    //     <DropdownItem key="system">System</DropdownItem>
    //     <DropdownItem key="configurations">Configurations</DropdownItem>
    //     <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
    //     <DropdownItem key="logout" color="danger">
    //       Log Out
    //     </DropdownItem>
    //   </DropdownMenu>
    // </Dropdown>
  );
}
