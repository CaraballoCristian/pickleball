import { Settings } from 'lucide-react';

const DashboardHeader = () => (
  <div className="bg-bg-secondary/30 dark:bg-bg-secondary-dark/30 border-b border-accent/10 dark:border-accent-dark/10 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Settings className="h-8 w-8 text-accent dark:text-accent-dark" />
          <h1 className="text-2xl font-bold text-text dark:text-text-dark">Dashboard Admin</h1>
        </div>
        <div className="text-sm text-text-secondary dark:text-text-dark/90">
          Panel de administración
        </div>
      </div>
    </div>
  </div>
);
export default DashboardHeader;