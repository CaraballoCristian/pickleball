"use client";
/* HOOKS */
import { useEffect, useState } from "react";
/* NAVIGATION */
import { usePathname, useRouter } from "next/navigation";
/* ICONOS */
import { Users, Trophy, Crown, Newspaper } from "lucide-react";
/* COMPONENTES */
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardLogin from "../../components/dashboard/DashboardLogin";
import TableControls from "../../components/dashboard/DashboardFilter";
import NavigationTabs from "../../components/dashboard/DashboardNav";
import DataTable from "../../components/dashboard/DataTable";
import FormModal from "../../components/dashboard/FormModal";
/* HELPERS */
import slugify from "../../helpers/slugify";
/* CONTEXT */
import { useAuth } from "../../context/AuthContext";
/* DATA */
import { torneosProximos, torneosPasados } from "../../data/torneosData";
import noticiasData from "../../data/noticiasData";
import rankingData from "../../data/rankingData";
import clubesData from "../../data/clubesData";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("clubes");
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [formData, setFormData] = useState({});

  /* SECTION STATES */
  const [clubes, setClubes] = useState(clubesData);
  const [torneos, setTorneos] = useState([
    ...torneosProximos,
    ...torneosPasados,
  ]);
  const [ranking, setRanking] = useState(rankingData);
  const [noticias, setNoticias] = useState(noticiasData);
  
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  
  /* EVITO FLASH */
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => setLoaded(true), 10);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated === null) {
    return null; // mientras redirige no muestra nada
  }

  /* TABS CONFIGURATION (FOR NAVIGATION) */
  const tabs = [
    { id: "clubes", label: "Clubes", icon: Users, count: clubes.length },
    { id: "torneos", label: "Torneos", icon: Trophy, count: torneos.length },
    { id: "ranking", label: "Ranking", icon: Crown, count: ranking.length },
    {
      id: "noticias",
      label: "Noticias",
      icon: Newspaper,
      count: noticias.length,
    },
  ];

  /* TAB SELECTOR - DATA PROVIDER */
  const getCurrentData = () => {
    switch (activeTab) {
      case "clubes":
        return clubes;
      case "torneos":
        return torneos;
      case "ranking":
        return ranking;
      case "noticias":
        return noticias;
      default:
        return [];
    }
  };

  /* DATA FILTERING */
  const filteredData = getCurrentData().filter((item) => {
    const matchesSearch = Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory =
      filterCategory === "all" ||
      (activeTab === "noticias" && item.category === filterCategory) ||
      (activeTab === "torneos" && item.estado === filterCategory);
    return matchesSearch && matchesCategory;
  });

  /* CRUD FUNCTIONS */
  const handleAdd = () => {
    setEditingItem(null);
    setFormData({});
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm("¿Estás seguro de que quieres eliminar este elemento?")) {
      switch (activeTab) {
        case "clubes":
          setClubes(clubes.filter((item) => item.id !== id));
          break;
        case "torneos":
          setTorneos(torneos.filter((item) => item.id !== id));
          break;
        case "ranking":
          setRanking(ranking.filter((item) => item.id !== id));
          break;
        case "noticias":
          setNoticias(noticias.filter((item) => item.id !== id));
          break;
      }
    }
  };

  const handleSave = () => {
    /* ID UNICO CON Date.now() */
    const newId = editingItem ? editingItem.id : Date.now();
    const updatedItem = { ...formData, id: newId };

    switch (activeTab) {
      case "clubes":
        if (editingItem) {
          setClubes(
            clubes.map((item) =>
              item.id === editingItem.id ? updatedItem : item
            )
          );
        } else {
          setClubes([...clubes, updatedItem]);
        }
        break;
      case "torneos":
        if (editingItem) {
          setTorneos(
            torneos.map((item) =>
              item.id === editingItem.id ? updatedItem : item
            )
          );
        } else {
          setTorneos([...torneos, updatedItem]);
        }
        break;
      case "ranking":
        if (editingItem) {
          setRanking(
            ranking.map((item) =>
              item.id === editingItem.id ? updatedItem : item
            )
          );
        } else {
          setRanking([...ranking, updatedItem]);
        }
        break;
      case "noticias":
        updatedItem.slug = slugify(updatedItem.title);

        if (editingItem) {
          setNoticias(
            noticias.map((item) =>
              item.id === editingItem.id ? updatedItem : item
            )
          );
        } else {
          setNoticias([...noticias, updatedItem]);
        }
        break;
    }
    setShowModal(false);
  };

  /* FORM CHANGE HANDLER */
  const handleFormChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return !isAuthenticated ? (
    <div className="min-h-screen flex items-center justify-center bg-bg dark:bg-bg-dark">
       <p>Redirecting...</p>
    </div>
  ) : loaded && (
    <div className="min-h-screen bg-bg dark:bg-bg-dark my-15">
      
      {/* HEADER */}
      <DashboardHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* NAVIGATION */}
        <NavigationTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />

        {/* FILTER & SEARCH */}
        <TableControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          activeTab={activeTab}
          handleAdd={handleAdd}
        />

        <div className="bg-bg/20 dark:bg-bg-dark/20 rounded-xl border border-accent/10 dark:border-accent-dark/10 overflow-hidden">
          {/* DATA TABLE */}
          <DataTable
            activeTab={activeTab}
            filteredData={filteredData}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {/* CRUD MODAL FORM */}
      <FormModal
        showModal={showModal}
        activeTab={activeTab}
        editingItem={editingItem}
        formData={formData}
        onFormChange={handleFormChange}
        onSave={handleSave}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default AdminDashboard;
