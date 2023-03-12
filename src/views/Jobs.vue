<template>
  <h2>Berufe</h2>
  <div>
    <h3>Militär & Sicherheit</h3>
    <h4>Söldner</h4>
    <img src="../../public/mercenary.png" />
    <p> Söldner werden vom König, von Städten oder von Kaufleuten angeheuert. Sie unterstützen die regulären
      Streitkräfte oder bewachten wichtige Handelsrouten. Söldner sind bekannt für ihre Disziplin und ihr Training, aber
      auch berüchtigt für das Plündern von feindlichen Dörfern.</p>
    <p> Diejenigen, die das Leben als Söldner wählen, tun dies vor allem aus Gründen der Abenteuerlust und dem Wunsch,
      Reichtum zu erlangen, den sie auf andere Weise vielleicht nicht erreichen könnten.</p>
    <p> Bekannte Söldnergruppen sind:</p>
    <ul>
      <li>Die Veenländer Garde: Die Veenländer Garde, die ursprünglich für den ersten Krieg gegen die Orks
        zusammengestellt wurde, wurde zuletzt auch bei der Errichtung des östlichen Grenzwalls eingesetzt.</li>
      <li>Die Bunte Rotte: Diese besteht aus desertierten Söldnern der Veenländer Garde, die sich mit Diebstahl und
        Wegelagerei durchschlagen. Sie sind nach den charakteristischen buntem Muster ihrer Waffenröcke benannt.</li>
      <li>Zugwächter: Zugwächter werden von Handelsgilden bezahlt, um Handelskolonnen zu bewachen.</li>
    </ul>
    <h4>Weitere Berufe</h4>
    <p>Söldner, Reiseführer, Henker, Scharfrichter, Nachtwächter, Waffenknecht, Gardist, Ritter, Wachtmeister</p>
    <p> Bettler, Wegelagerer, Einsiedler, Dieb, Beutelschneider, Räuber, Wilderer, Schmuggler, Geldverleiher, Deserteur,
      Brigant</p>
  </div>
  <div>
    <h3>Wissenschaft & Kultur</h3>
    <h4>Kartenmacher</h4>
    <img src="../../public/cartographer.png" />
    <p>Kartographen werden vom König oder von Kaufleuten bezahlt um Land- oder Seekarten zu erstellen. Aber auch der Tempel und Schwarzmagier sind interessiert am Standort von alten Tempelanlagen des alten Volkes, um magische Artefakte zu finden.</p>
    <p>Kartographen sind bekannt für ihr große Gebietskenntnis und Wissen in verwandten Bereichen wie der Geographie und der Astronomie.</p>
    <h4>Weitere Berufe</h4>
    <p>Alchemist, Archivar, Astrologe, Kartenmacher, Bibliothekar, Maler, Nonne, Priester, Mönch, Advokat, Höfling, Schreiber</p>
    <p>Spielleute: Schauspieler, Barde, Narr, Akrobat</p>
  </div>
  <div>
    <h3>Handel & Dienstleistungen</h3>
    <h4>Kesselflicker</h4>
    <img src="../../public/tinker.png" />
    <p>Kesselflicker sind fahrende Händler und Handwerker, die Kessel und Töpfe reparieren, aber auch Waren verkaufen. Sie sind oft in ländlichen Gebieten unterwegs und schnappen alle möglichen Neuigkeiten auf. Kesselflicker sind als Lebenskünstler und für ihre Fähigkeiten in der Metallbearbeitung bekannt.</p>
    <p>Diejenigen, die das Leben als Kesselflicker wählten, tun dies vor allem um Armut oder Verfolgung in ihrer Heimat zu entkommen und weil sie die Freiheit schätzen.</p>
    <h4>Weitere Berufe</h4>
    <p>Händler, Kaufleute (Gewürze, Holz, Stoffe, Wein, Pelze, Pferde), Bote, Bankier, Bader/Badefrau, Prostituierte, Diplomat, Richter, Barbier, Apotheker, Heiler, Arzt, Handwerkschirurg</p>
    <p>Wirt, Koch, Rattenfänger, Totengräber, Seemann, Wagenlenker</p>
  </div>
  <div>
    <h3>Ernährung & Naturressourcen</h3>
    <h4>Wildhüterin</h4>
    <img src="../../public/gamekeeper.jpg" />
    <p>Wildhüterinnen kümmern sich um die Wälder in der Nähe von Dörfern oder Städten. Sie sind geschickt im Fallenstellen und im Trainieren von Jagdhunden. Ihr Auftrag besteht darin, den Wald vor Wilderern zu schützen und das Dorf vor den Gefahren durch die Kreaturen des Waldes zu bewahren. Wildhüterinnen sind bekannt für ihr fundiertes Wissen über Natur und Tierwelt sowie ihre herausragenden Fähigkeiten als Jägerinnen.</p>
    <h4>Weitere Berufe</h4>
    <p>Bauer, Jäger, Wildhüter, Kräutersammler, Gärtner, Hirte, Imker, Fischer, Bergarbeiter, Steinmetz, Müller, Bäcker, Bierbrauer, Winzer, Metzger, Schnapsbrenner, Fallensteller.</p>
  </div>
  <div>
    <h3>Handwerk</h3>
    <h4>Waffenschmied</h4>
    <img src="../../public/armourer.png" />
    <p>Waffenschmiedinnen reparieren und schmieden Rüstungen und Waffen. Sie sind geschickt in der Schmiedekunst und kundig in seltenen Metallen. Sie sind bekannt für ihre große physische Kraft durch die körperlich harte Arbeit am Amboss.</p>
    <h4>Weitere Berufe</h4>
    <p>Holz & Ton: Tischler, Schreiner, Drechsler, Töpfer</p>
    <p>Metall & Stein: Maurer, Schmied (Waffen, Rüstungen, Gold), Mechaniker, Münzpräger</p>
    <p>Textil & Leder: Weber, Schneider, Schuster</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0
    }
  }
}
</script>

<style>
  img {
    height: 40vh;
    width: auto;
  }

  ul {
    line-height: 22px;
  }

  li {
    margin-bottom: 4px;
  }
</style>