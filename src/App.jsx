import { useState } from "react";
import { marked } from "marked";
import "./App.css";
export default function App() {
  const [markdown, setMarkDown] = useState(`# Markdown Previewer
    
- **Bold text**
- *Italic text*
- [Link](https://example.com)
- \`Inline code\`

- \`\`\`js
function hello() {
  console.log("Hello, world!");
}
\`\`\`

    `);

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <div className="editor-container">
        <textarea
          className="editor"
          // value={markdown}
          onChange={e => setMarkDown(e.target.value)}
        />
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { breaks: true }),
          }}
        ></div>
      </div>
    </div>
  );
}
