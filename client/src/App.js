import './App.css';
import Menu from './components/menu';

function App() {
  return (
    <div class="main-page">
      <div class="title">Efemérides Astrónomicasss</div>
      <div class="description">
        En el estudio de los cuerpos celestes, una efemérides, efeméride o
        efemeris (plural: efemérides; del griego ἐφήμερος, ephémeros, «diario»)
        es una tabla de valores que da las posiciones de los objetos
        astronómicos en el cielo en un momento o momentos dados. Aunque fue
        también una de las primeras aplicaciones de las computadoras mecánicas,
        el término efemérides continúa aplicándose generalmente a una simple
        tabla impresa. La posición astronómica calculada a partir de efemérides
        se da en el sistema de coordenadas esféricas de la ascensión recta y la
        declinación. Algunos de los fenómenos astronómicos de importancia para
        los astrónomos son los eclipses, la retrogradación de los planetas, los
        ingresos planetarios, el tiempo sidéreo, las posiciones medias y reales
        de los nodos de la Luna, las fases lunares y las posiciones de los
        cuerpos celestes menores, como Quirón.
      </div>
      <Menu />
      <div class="description">Una descripción más detallada...</div>
    </div>
  );
}

export default App;
