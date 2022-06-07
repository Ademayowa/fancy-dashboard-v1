import SidebarBottom from './SidebarBottom';
import SidebarMiddle from './SidebarMiddle';
import SidebarTop from './SidebarTop';

export default function Sidebar() {
  return (
    <div className='col-span-2'>
      <SidebarTop />
      <SidebarMiddle />
      <SidebarBottom />
    </div>
  );
}
