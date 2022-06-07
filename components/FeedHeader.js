import { LightBulbIcon } from '@heroicons/react/outline';

export default function FeedHeader() {
  return (
    <div className='bg-slate-800 p-5 rounded-lg'>
      <div className='flex'>
        <div className='flex items-center flex-1 text-white'>
          <div className='flex space-x-2'>
            <LightBulbIcon className='h-6' />
            <div className='flex space-x-10'>
              <h4 className='font-bold'>6 Suggestions</h4>
              <h4>
                <span className='text-sm font-light'>Sort by :</span> Most
                Upvotes
              </h4>
            </div>
          </div>
        </div>

        <button className='bg-purple-800 px-5 py-2 text-white rounded-lg'>
          +Add Feeback
        </button>
      </div>
    </div>
  );
}
