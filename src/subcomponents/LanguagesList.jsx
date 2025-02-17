import { useState } from "react";
// Import languages.js
import language from "../data/languages";
// Import Languages.jsx
import Languages from "./Languages";

export default function LanguagesList() {
  const [activeLang, setActiveLang] = useState(null);

  function renderLanguages() {
    return language.map((lang) => {
      return (
        <Languages
          key={lang.id}
          title={lang.title}
          desc={lang.description}
          isClicked={activeLang === lang.id}
          onToggle={() => setActiveLang(lang.id)}
        />
      );
    });
  }

  const [sectionStatus, setSectionStatus] = useState(null);

  return <nav className="list-languages">{renderLanguages()}</nav>;
}
