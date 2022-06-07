export default function RoadmapList({ text, value }) {
  return (
    <div className='flex mt-5 space-x-2'>
      <span>•</span>
      <div className='flex flex-1'>
        <h4 className='flex flex-1'>{text}</h4>
        <p className='font-bold text-slate-800'>{value}</p>
      </div>
    </div>
  );
}
