const NavigationTabs = ({ activeTab, setActiveTab, tabs }) => (
  <div className="mb-8">
    <div className="border-b border-accent/10 dark:border-accent-dark/10">

    {/* NAVIGATION */}
      <nav className="-mb-px flex space-x-8 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-accent dark:border-accent-dark text-accent dark:text-accent-dark"
                  : "border-transparent text-text hover:text-text dark:hover:text-text-dark hover:border-accent/30 dark:hover:border-accent-dark/30 dark:text-text-dark"
              }`}
            >

              {/* ICON & LABEL */}
              <Icon className="h-5 w-5" />
              {tab.label}

              {/* COUNT BADGE */}
              <span className="ml-1 bg-accent/10 dark:bg-accent-dark/20 text-accent dark:text-accent-dark px-2 py-0.5 rounded-full text-xs">
                {tab.count}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  </div>
);
export default NavigationTabs;
