// import { BellIcon } from '@heroicons/react/outline';
import RoadmapList from './RoadmapList';

export default function SidebarBottom() {
  return (
    <div className='bg-white mt-5 mx-2 py-10 shadow-lg rounded-lg px-5'>
      <div className='flex items-center'>
        <h4 className='flex flex-1 font-bold text-xl text-slate-800'>
          Roadmap
        </h4>
        <a href='#' className='text-blue-400'>
          View
        </a>
      </div>

      <div>
        <RoadmapList text='Planned' value='2' />
        <RoadmapList text='In-Progress' value='3' />
        <RoadmapList text='Live' value='1' />
      </div>
    </div>
  );
}
