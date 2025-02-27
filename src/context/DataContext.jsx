import { createContext, useContext, useState, useEffect } from "react";
import dataJSON from "../data.json"; // ✅ data.json buradan yüklenecek

// 📌 Data Context oluştur
const DataContext = createContext();

// 📌 DataContext Provider bileşeni
export function DataProvider({ children }) {
  const [data, setData] = useState({ mainNavbar: [], newNavbar: [] });

  // ✅ data.json dosyasını yükle
  useEffect(() => {
    setData(dataJSON);
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// 📌 Custom Hook: Veri çağırmayı kolaylaştırır
export function useData() {
  return useContext(DataContext);
}
