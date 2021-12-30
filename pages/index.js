import Sidebar from '../components/Sidebar';

// With Next.js, we have a built in router so React Router is not needed. Next.js uses the filenames to determine the page that we are visiting (e.g. "search.js" is "/search").
export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      {/* Set the above container to the height of the screen and make its overflow hidden so that we can scroll without changing anything else. */}
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
}
