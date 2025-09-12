/* LIBRARIES */
import { motion } from 'framer-motion';

const PageTitle = ({title, subtitle}) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* TITLE */}
          <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-4">
            {title}
          </h1>
          {/* SUBTITLE */}
          <p className="text-lg text-text/90 dark:text-text-dark/90">
            {subtitle}
          </p>
        </div>
      </motion.div>
  )
}

export default PageTitle;