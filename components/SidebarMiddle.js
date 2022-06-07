import SidebarList from './SidebarList';

export default function SidebarMiddle() {
  return (
    <div className='bg-white mt-5 mx-2 py-10 shadow-lg rounded-lg px-5'>
      <div className='flex flex-wrap items-center gap-x-2.5 gap-y-2.5'>
        <SidebarList text='All' active />
        <SidebarList text='UI' />
        <SidebarList text='UX' />
        <SidebarList text='Enhancement' />
        <SidebarList text='Bug' />
        <SidebarList text='Feature' />
      </div>
    </div>
  );
}
