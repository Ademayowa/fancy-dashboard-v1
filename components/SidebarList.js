export default function SidebarList({ active, text }) {
  return (
    <>
      <h4
        className={`bg-[#F2F7FB]  text-blue-600 font-bold py-2 px-4 rounded-lg ${
          active && '!bg-blue-500 !text-white'
        } `}
      >
        {text}
      </h4>
    </>
  );
}
