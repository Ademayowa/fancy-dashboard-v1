import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className='lg:max-w-6xl mx-auto overflow-hidden py-5'>
      <main className='grid grid-cols-7'>
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}
