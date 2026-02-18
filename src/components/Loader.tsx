import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress with a slightly non-linear curve for realism
        const start = Date.now();
        const duration = 2000; // 2 seconds total load time

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const progressRatio = Math.min(elapsed / duration, 1);

            // Easing function for smoother progress
            const easedProgress = 1 - Math.pow(1 - progressRatio, 3);

            setProgress(easedProgress * 100);

            if (progressRatio >= 1) {
                clearInterval(interval);
                setTimeout(onLoadingComplete, 600); // Small pause at 100%
            }
        }, 16);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    // Static bar configuration to resemble a barcode
    // Using explicit widths to create that specific barcode look
    const bars = [
        3, 1, 4, 1, 2, 2, 1, 3, 5, 1, 2, 1,
        4, 2, 1, 2, 3, 1, 6, 1, 2, 1, 3, 2,
        1, 4, 1, 2, 3, 1, 2, 1, 5, 2, 1, 3
    ];

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Barcode Container */}
            <div className="flex items-center gap-[3px] mb-6 h-16">
                {bars.map((width, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#d1d5db] h-full rounded-[1px]" // Light gray/zinc-300
                        style={{ width: `${width * 2}px` }}
                        initial={{ height: "0%" }}
                        animate={{
                            height: ["0%", "100%", "90%", "100%"],
                            opacity: [0, 1, 0.8, 1]
                        }}
                        transition={{
                            duration: 1.2,
                            times: [0, 0.6, 0.8, 1],
                            delay: i * 0.015, // Stagger effect
                            ease: "circOut"
                        }}
                    />
                ))}
            </div>

            {/* System Integrity Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-tech text-[#3b82f6] text-lg tracking-[0.25em] font-bold"
            >
                <span className="mr-2">SYS.INTEGRITY:</span>
                <span className="inline-block w-[3ch] text-right">
                    {Math.floor(progress)}%
                </span>
            </motion.div>

            {/* Loading Progress Line */}
            <motion.div
                className="fixed bottom-0 left-0 h-1 bg-white"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
            />
        </motion.div>
    );
};

export default Loader;
