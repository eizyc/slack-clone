import Quill from "quill";
import dynamic from "next/dynamic";
import { useRef } from "react";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

interface ChatInputProps {
  placeholder: string;
};

export const ChatInput = ({ placeholder }: ChatInputProps) => {

  const editorRef = useRef<Quill | null>(null);


  return (
    <div className="px-5 w-full">
      <Editor
        placeholder={placeholder}
        onSubmit={()=>{}}
        innerRef={editorRef}
      />
    </div>
  );
};
