export default function Page() {
  return (
    <div className="w-screen bg-slate-300 h-screen p-8 flex flex-col items-center">
      <div className="w-full h-full bg-slate-400 flex gap-2 p-2">
        <textarea
          name="input-text"
          id=""
          className="w-1/2 h-full rounded-sm"
        ></textarea>
        <textarea
          name="input-text"
          id=""
          className="w-1/2 h-full rounded-sm"
        ></textarea>
      </div>
      <button className="bg-slate-500 text-slate-100 mt-8 rounded-md px-5 py-2">
        format
      </button>
    </div>
  )
}
