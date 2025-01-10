import React, { useState, useRef, useEffect } from 'react'
import { Bold, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

interface FormatState {
  bold: boolean
  italic: boolean
  underline: boolean
  list: boolean
  orderedList: boolean
  alignLeft: boolean
  alignCenter: boolean
  alignRight: boolean
}

export const TextEditor: React.FC = () => {
  const [content, setContent] = useState('')
  const [formatState, setFormatState] = useState<FormatState>({
    bold: false,
    italic: false,
    underline: false,
    list: false,
    orderedList: false,
    alignLeft: true,
    alignCenter: false,
    alignRight: false,
  })
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content
    }
  }, [])

  const execCommand = (command: string, value: string | undefined = undefined) => {
    document.execCommand(command, false, value)
    updateContent()
    updateFormatState()
  }

  const updateContent = () => {
    if (editorRef.current) {
      // Clean up the content by removing extra whitespace and breaks
      const cleanContent = editorRef.current.innerHTML
        .replace(/<br\/?>/gi, '')  // Remove <br> tags
        .replace(/&nbsp;/g, '')    // Remove &nbsp;
        .trim()                    // Remove whitespace
      
      // Only set content if there's actual text
      setContent(cleanContent || '')
    }
  }

  const updateFormatState = () => {
    setFormatState({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      list: document.queryCommandState('insertUnorderedList'),
      orderedList: document.queryCommandState('insertOrderedList'),
      alignLeft: document.queryCommandState('justifyLeft'),
      alignCenter: document.queryCommandState('justifyCenter'),
      alignRight: document.queryCommandState('justifyRight'),
    })
  }

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    const selection = window.getSelection()
    
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(target)
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      const caretOffset = preCaretRange.toString().length

      // Scroll to the left
      target.scrollLeft = 0

      // Set caret position
      const newRange = document.createRange()
      newRange.setStart(target, caretOffset)
      newRange.setEnd(target, caretOffset)
      selection.removeAllRanges()
      selection.addRange(newRange)
    }

    updateContent()
    updateFormatState()
  }

  const FormatButton: React.FC<{ 
    icon: React.ReactNode
    command: string
    value?: string
    tooltip: string
    isActive: boolean
  }> = ({ icon, command, value, tooltip, isActive }) => (
    <button
      className={`p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors duration-200 ${
        isActive ? 'bg-gray-200 text-gray-900' : ''
      }`}
      onClick={(e) => {
        e.preventDefault()
        execCommand(command, value)
      }}
      title={tooltip}
    >
      {icon}
    </button>
  )

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4 flex flex-wrap gap-2 border-b pb-2">
        <FormatButton icon={<Bold size={18} />} command="bold" tooltip="Bold" isActive={formatState.bold} />
        <FormatButton icon={<Italic size={18} />} command="italic" tooltip="Italic" isActive={formatState.italic} />
        <FormatButton icon={<Underline size={18} />} command="underline" tooltip="Underline" isActive={formatState.underline} />
        <FormatButton icon={<List size={18} />} command="insertUnorderedList" tooltip="Bullet List" isActive={formatState.list} />
        <FormatButton icon={<ListOrdered size={18} />} command="insertOrderedList" tooltip="Numbered List" isActive={formatState.orderedList} />
        <FormatButton icon={<AlignLeft size={18} />} command="justifyLeft" tooltip="Align Left" isActive={formatState.alignLeft} />
        <FormatButton icon={<AlignCenter size={18} />} command="justifyCenter" tooltip="Align Center" isActive={formatState.alignCenter} />
        <FormatButton icon={<AlignRight size={18} />} command="justifyRight" tooltip="Align Right" isActive={formatState.alignRight} />
      </div>
      <div
        ref={editorRef}
        className="min-h-[200px] p-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 prose max-w-none overflow-x-auto whitespace-pre-wrap break-words"
        contentEditable
        onInput={handleInput}
        onBlur={updateContent}
        onKeyUp={updateFormatState}
        onMouseUp={updateFormatState}
        style={{
          direction: 'rtl',
          unicodeBidi: 'plaintext',
        }}
      />
      <div className="mt-4 text-sm text-gray-500">
        {content.length} characters
      </div>
    </div>
  )
}