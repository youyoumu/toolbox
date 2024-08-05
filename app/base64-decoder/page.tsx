'use client'
import { useState } from 'react'
import { decode } from 'js-base64'

export default function Page() {
  const [inputText, setInputText] = useState('')
  const [formatVB, setFormatVB] = useState(false)

  function decodeText(inputText: string) {
    return decode(inputText)
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
        <div id="" className="w-1/2 h-full rounded-s bg-white">
          {decodeText(inputText)}
        </div>
      </div>
      <div className="flex justify-start gap-8 mt-8 items-center w-full">
        <label htmlFor="format-vb" className="hidden">
          <input
            type="checkbox"
            name=""
            id="format-vb"
            checked={formatVB}
            onChange={() => setFormatVB(!formatVB)}
          />
          <span className="ml-2">Format VB</span>
        </label>
        <button
          className="bg-slate-500 text-slate-100 rounded-md px-5 py-2"
          onClick={() => setInputText(inputText)}
        >
          decode
        </button>
      </div>
    </div>
  )
}
