import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Áttekintés, témazáró feladatok</h1>
      </header>

      <div className="App-div">
        <h3>Mi a feladata egy csomagkezelőnek?</h3>
        <p>
          A csomagkezelők nagyban megkönnyítik a fejlesztők dolgát, mert a készülő projekthez számtalan előre megírt sablonnal, megoldással rendelkeznek.
          Melyek legtöbbjét szabadon felhasználhatják, átszabhatják, ezenkívül a programok függőségeit önállóan ellenőrzik, ha szükséges kezelik,
          így biztosítva a hosszútávú stabil működést.
        </p>
        <br />

        <h3>Milyen csomagkezelőket ismer?</h3>
        <ul>
          <li>NPM - Node Package Manager</li>
          <li>PNPM - a Node.js alternatív csomagkezelője</li>
          <li>Yarn - szintén Javascripthez való csomagkezelő</li>
        </ul>
        <br />

        <h3>Mi a különbség ezek működése között?</h3>
        <p>
          <b>NPM</b> - Az npm a világ legnagyobb szoftver csomag könyvtára, telepítése a Node.js telepítésével megtörténik.
          Talán az egyik legnépszerűbb nyilt forráskodú szoftverek megosztóhelye.
          Minden egyes munkánkhoz külön feltelepíti a saját függőségeit, ezzel egy kissé megnöveli a gépünkre rakódó adatokat.
        </p>
        <p>
          <b>PNPM</b> - Az NPM és Yarn-al szemben a PNPM használatakor a gépünkre egy központi könyvtárba telepíti a csomagokat, ez minden munka során
          elérhető, minden fejlesztésnél használható. Ez a módszer renkívül helytakarékos, mert a munkáink során a tényleges tárhelyfoglalás helyett,
          csupán linkek segítik a megfelelő csomagok használatát.
        </p>
        <p>
          <b>Yarn</b> - Telepítése az NPM-el lehetséges. Szintén csomagok telepítésére, függőségek kezelésére használjuk. Előnye, hogy a telepítések gyorsabban mennek végbe,
          mint az NPM esetében. A Yarn egy  yarn.lock fájlt hoz létre, melyben rögzíti a telepítés idején aktuális függőségeket.
          Ez biztosítja, hogy a projekten dolgozó csapat ugyanazokat a verziójú függőségeket telepítse.
        </p>

      </div>

    </div>
  );
}

export default App;
