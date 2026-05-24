import { motion } from 'framer-motion';

export default function BuyRankButton() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      {/* Background Glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)',
        }}
      />

      {/* Buy Rank Button */}
      <motion.a
        href="https://discord.gg/BNfTkGs8P"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.08,
          rotate: 1,
          boxShadow: '0 0 60px rgba(88,101,242,1)',
        }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 px-16 py-6 text-3xl font-black text-white shadow-[0_0_40px_rgba(168,85,247,0.8)]"
      >
        {/* Animated Shine */}
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Floating Glow */}
        <motion.div
          className="absolute inset-0 rounded-[30px]"
          animate={{
            boxShadow: [
              '0 0 20px rgba(236,72,153,0.5)',
              '0 0 60px rgba(34,211,238,1)',
              '0 0 20px rgba(236,72,153,0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        {/* Button Text */}
        <span className="relative z-10">BUY RANK</span>
      </motion.a>
    </div>
  );
}
