// Import languages.js
import languages from "../data/languages";

export default function LearnWebDev() {
  return (
    <nav>
      <ul>
        {languages.map((language) => {
          <li key={language.id}>{language.title}</li>;
        })}
      </ul>
    </nav>
  );
}
