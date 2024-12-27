import { motion } from "framer-motion";

interface MacOSWindowProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

export function MacOSWindow({
  children,
  title = "",
  className = "",
}: MacOSWindowProps) {
  return (
    <div
      className={`group border rounded-lg bg-background shadow-2xl overflow-hidden ${className}`}
    >
      <div className="h-12 bg-background flex items-center px-4 select-none">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#4C4C50] flex items-center justify-center transition-colors group-hover:bg-[#FF5F56]">
            <div className="w-2 h-0.5 bg-[#4C4C50] opacity-0 group-hover:opacity-100 transition-colors group-hover:bg-[#E0443E]" />
          </div>
          <div className="w-3 h-3 rounded-full bg-[#4C4C50] flex items-center justify-center transition-colors group-hover:bg-[#FFBD2E]">
            <div className="w-2 h-0.5 bg-[#4C4C50] opacity-0 group-hover:opacity-100 transition-colors group-hover:bg-[#DEA123]" />
          </div>
          <div className="w-3 h-3 rounded-full bg-[#4C4C50] flex items-center justify-center transition-colors group-hover:bg-[#27C93F]">
            <div className="w-2 h-0.5 bg-[#4C4C50] opacity-0 group-hover:opacity-100 transition-colors group-hover:bg-[#1AAB29]" />
          </div>
        </div>

        {title && (
          <div className="absolute left-1/2 transform -translate-x-1/2 text-muted-foreground text-sm font-medium">
            <motion.div
              style={{
                marginBottom: "-20px",
                marginRight: "-45px",
                paddingBottom: "20px",
                paddingRight: "55px",
                display: "inline-block",
              }}
              animate={{ rotate: [0, 10, 0] }}
              whileHover={{ rotate: [0, 10, 0] }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                repeat: 1,
              }}
            >
              👋
            </motion.div>
            {title}
          </div>
        )}
      </div>

      <div className="p-8">{children}</div>
    </div>
  );
}
