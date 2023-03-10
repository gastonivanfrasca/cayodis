import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  currentSlide: number;
  slides: string[];
};

const TutorialSlide = (props: Props) => {
  const { currentSlide, slides } = props;
  return (
    <div className="my-8 md:max-w-2xl mx-auto pb-8">
      <ReactMarkdown
        children={slides[currentSlide]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="py-2 text-4xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="py-2 text-3xl font-bold" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="py-2 text-2xl font-bold" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="py-2 text-xl font-bold" {...props} />
          ),
          h5: ({ node, ...props }) => (
            <h5 className="py-2 text-lg font-bold" {...props} />
          ),
          h6: ({ node, ...props }) => (
            <h6 className="py-2 text-base font-bold" {...props} />
          ),
          p: ({ node, ...props }) => (
            <div className="max-w-prose py-2">
              <p className="text-base" {...props} />
            </div>
          ),
          ul: ({ node, ...props }) => (
            <ul className="py-2 list-disc ml-8" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="py-2 list-decimal ml-8" {...props} />
          ),
          li: ({ node, ...props }) => <li className="py-2 my-2" {...props} />,
          a: ({ node, ...props }) => (
            <a className="py-2 text-blue-500" {...props} />
          ),

          pre: ({ node, ...props }) => (
            //@ts-ignore
            <div className="mockup-code my-4" {...props} />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                // @ts-ignore
                style={darcula}
                language={match[1]}
                PreTag="pre"
                customStyle={{
                  borderRadius: "0.5rem",
                  backgroundColor: "transparent",
                }}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};

export default TutorialSlide;
