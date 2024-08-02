'use client'
import { useState } from 'react'
import { format } from 'sql-formatter'

export default function Page() {
  const [inputText, setInputText] = useState('')

  function formatText(inputText: string) {
    let inputTextArray = format(inputText, {
      language: 'tsql',
      tabWidth: 4
    }).split('\n')
    inputTextArray = inputTextArray.map((line) => {
      return `"${line}" + _`
    })
    const formattedText = inputTextArray.join('\n')
    return formattedText
  }

  return (
    <div className="w-screen bg-slate-300 h-screen p-8 flex flex-col items-center">
      <div className="w-full h-full bg-slate-400 flex gap-2 p-2">
        <textarea
          name="input-text"
          id=""
          className="w-1/2 h-full rounded-sm"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <textarea
          name="input-text"
          id=""
          className="w-1/2 h-full rounded-sm disabled:bg-slate-200"
          value={formatText(inputText)}
          disabled
        ></textarea>
      </div>
      <button className="bg-slate-500 text-slate-100 mt-8 rounded-md px-5 py-2 hidden">
        format
      </button>
    </div>
  )
}
