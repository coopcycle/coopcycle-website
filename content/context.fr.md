+++
draft = false
title = "Un panorama sur la situation des livreurs"
description = "Une analyse du contexte socio-économique de la livraison à vélo. Retour sur les mobilisations des livreurs. Analyse du marché de la foodtech et de ses conditions salariales. Éclairage sur les profils des livreurs. "
lang = "fr"
menu = "main"
weight = 2
slug = "un-panorama-sur-la-situation-des-livreurs"
type = "context"
+++
<!-- amCharts javascript sources -->
<script type="text/javascript" src="https://www.amcharts.com/lib/3/amcharts.js"></script>
<script type="text/javascript" src="https://www.amcharts.com/lib/3/serial.js"></script>
<script type="text/javascript" src="https://www.amcharts.com/lib/3/themes/light.js"></script>
<script src="amcharts/plugins/responsive/responsive.min.js" type="text/javascript"></script>
<script src="https://www.amcharts.com/lib/3/ammap.js"></script>
<script src="https://www.amcharts.com/lib/3/maps/js/worldHigh.js"></script>
<script src="https://www.amcharts.com/lib/3/plugins/export/export.min.js"></script>
<link rel="stylesheet" href="https://www.amcharts.com/lib/3/plugins/export/export.css" type="text/css" media="all" />
<script src="https://www.amcharts.com/lib/3/themes/light.js"></script>
<script type="text/javascript" src="https://www.amcharts.com/lib/3/pie.js"></script>

<script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

<!-- amCharts javascript code -->
<script type="text/javascript", src="/charts.js"></script>
<script type="text/javascript", src="/maps.js"></script>
<script type="text/javascript", src="/additional_widget.js"></script>

<div class="triangle-border rightcontext red" align="right">
<div class = 'context-title'> Mais, au fait, <br> quelle est la situation actuelle des livreurs de la foodtech ?</div>
</div>


# Un mécontentement qui gagne du terrain

Partons du constat : depuis l'été 2016, les livreurs font entendre de plus en plus leur colère et se mobilisent en collectifs pour défendre leurs droits.

 

<div ></br>
    <center>
    <h3> De plus en plus de livreurs en grève  </h3>
    </center>
</div>

*Depuis août 2016, les livreurs des plateformes de foodtech n'ont de cesse de manifester leur mécontentement en se mettant en grève. Leur cadre légal ne le permettant pas, ils se "déconnectent" le temps de leur journée de travail. Ce qui a mis le feu aux poudres: l'abandon du paiement horaire pour le paiement à la course (5,75€).*
<div class = "graph-container">
    <div class= "graph-column colum-one">
            <div  id="line" style="width: 100%; height: 400px; background-color: #FFFFFF;" >
            </div>
        </div>
    <div class= "graph-column colum-two">
            <div id="lineSec" style="width: 100%; height: 400px; background-color: #FFFFFF;" >
            </div>
        </div>
    <div class= "graph-column colum-three">
            <div id="lineThird" style="width: 100%; height: 400px; background-color: #FFFFFF;" >
            </div>
        </div>
  </div>

<div class = "graph-container">
    <div class= "graph-column colum-one">
        <div id="map" style="width: 100%; height: 500px;" > </div>
        </div>
    <div class= "graph-column colum-two">
         <div id="map2" style="width: 100%; height: 500px;" > </div>
        </div>
    <div class= "graph-column colum-three">
         <div id="map3" style="width: 100%; height: 500px;" > </div>
        </div>
  </div>
<div >
    <center>
    <h3> De plus en plus de pays concernés</h3>
    </center>
</div>

*La carte indique la répartition des <b>incidents</b> relatifs aux entreprises de livraison instantanée (Foodora, Glovo, Deliveroo), incidents regroupant les grèves de livreurs, les manifestations contre les conditions de travail des livreurs, mais également les blocages de restaurant, le "gameroo" qui consiste à demander aux restaurants de déconnecter leur tablette des dites entreprises ainsi que des sitting dans les bureaux des companies.*
<p align=right>Données: Transnational Food Platform Strike, <br /> recueillies par Jérôme Pimot et Callum Cant </p>

Mais revenons sur la situation du marché de la foodtech contre lequel s'insurgent ces livreurs. 

# La foodtech: un secteur en pleine croissance ?

La <b> foodtech </b> -entendu comme l'alliance entre le secteur de l'alimentation/restauration, et les économies de plateforme- est un secteur aujourd'hui en pleine croissance qui devrait générer <b> 250 </b> milliards de dollars à l'horizon 2022 (Research and Markets).

<center>
<div id="chartdiv1" style="width: 80%; height: 400px; background-color: #FFFFFF;" ></div>
</center>
<center>
<div id="date_creation" style="width: 75%; height: 400px; background-color: #FFFFFF;" ></div>
</center>

Cependant cet emballement vivace cache un marché encore fragile, dont la "consolidation est inévitable et sera coûteuse" (<a href = "https://www.xerfi.com/presentationetude/Les-FoodTech-a-l-horizon-2020_7IAA66">Xerfi Research</a>). Ceci est dû aux paniers moyens faibles et aux marges faibles sous la pression de la concurrence qui engendre une course dangereuse à la captation du marché.
 <div id="deliveroo" style="width: 100%; height: 400px; background-color: #FFFFFF;" ></div>

<p class="triangle-border right" align="right">
  <b> « La victoire reviendra à celui qui est prêt à perdre de l’argent le plus longtemps » </b> </br> Take Eat Easy , société fondée en 2013, en faillite en 2016 </p>

Or la compression des marges de ces entreprises repose avant tout sur un système législatif régulant le travail très avantageux. 

# Le statut d'auto-entrepreneur dans le collimateur
 
L'un des rouages premier de ce marché réside dans le recrutement des livreurs sous le statut d'auto-entrepreneurs  c’est-à-dire de simples prestataires de services, permettant de contourner les dispositions du code du travail. 


<div class = "graph-container-wage">
    <div class= "graph-column colum-one">
        <div id="wage_real" style="width: 100%; height: 500px; background-color: #FFFFFF;" ></div>
        <div class = "text-column ">
            <p> C'est un vrai défi que de cerner la rémunération réelle d'un livreur dont le mode de calcul varie énormement selon les plateformes. <br> Ainsi chez <b><font color="#ff1a75">Foodora </font></b>, le <b>paiement à l'heure</b> prévaut avec un salaire horaire de 7.25€ + 2 € par course. <br>
             Chez Deliveroo et UberEATS, c’est plus aléatoire, puisque le livreur est <b>payé à la course </b>:<ul style="list-style-type:square">
             <li> <b><font color="#00cccc"> Deliveroo </font></b> : 5,75€ la livraison, ie entre 7 et 14€/heure (pour 2-4 livraisons/heure)</li> 
             <li> <b><font color="#0099cc"> UberEATS </font></b>: 3,50€  par livraison, plus un euro par kilomètre.
             </ul>.    </p>
        </div>
    </div>
    <div class= "graph-column colum-two">
         <div id="wage_ideal" style="width: 100%; height: 500px; background-color: #FFFFFF;" ></div>
        <div class = "text-column ">
            <p>Nous avons effectué cette estimation basse de ce que devrait être la rémunération brute d'un livreur si elle venait à prendre en compte les coûts cachés de la profession. <br> Ainsi si un.e livreur.euse veut bénéficier: 
            <ul style="list-style-type:square">
                <li>d'une <b> assurance contre le chômage et une protection sociale </b>, il faut mettre de côté un équivalent des charges salariales et cotiser auprès de la Sécurité sociale;</li>
                <li>d'une  <b> protection contre les accidents</b>, il est nécessaire d'assurer son matériel, de se protéger contre les préjudices, et de recevoir une indémnité en cas d'arrêt de travail;</li>
                <li> de <b> congés payés </b> et de <b>jours de repos</b> au même titre que le régime salarié en France;</li>
                </ul>
                il.elle aura besoin, selon notre estimation fondée sur le salaire net horaire du SMIC (7.61€), d'un salaire brut horaire de <b> <font color= "#eeb516"> 15.85€ </font></b>.
            </p>
          </div>
    </div>
</div>

<div class = "card-trials"> 
    <div class = "card-trials-header">
        <div class = "text-center">
        <b>Deliveroo, ses "partenaires coursiers" et ses déboires judiciaires</b>
        </div>
    </div>
    <div class = "card-trials-text">
    <br>
    Dernièrement (mars 2018), Deliveroo s'est retrouvé une nouvelle fois devant la justice, pour déterminer si en employant des auto-entrepreneurs la companie ne serait pas en infraction avec le code du travail. En effet est en jeu la notion de <i> lien de subordination </i> propre au contrat salarial classique. Nouvelle donne: cette fois-ci l'URSSAF et l'inspection du travail appuient cette demande de requalification des contrats, estimant qu'il y a donc fraude aux cotisations salariales de la part de Deliveroo. <br>
    <br> <div class= "card-trials-text-emphasize"> Or cette fraude s'élèverait selon ces organismes à plus de  <span class="count-cotis">6.4 </span> millions d'euros. 
    </div></div>
</div>



# Les livreur.euse.s : tout.e.s des étudiant.e.s dilettantes ?

Mais la grande question qui sous-tend les limites du statut d'auto-entrepreneur reste à savoir si les livreurs à vélo cherchent par cette pratique à arrondir leurs fins de mois auquel cas ce statut leur offre la flexibilité révêe ... ou bien à gagner leur vie et subissent ce statut faute de mieux. <br>

<center>
<h5> La réalité des livreurs est-elle aussi rose qu'un T-Shirt de <b><font color="#ff1a75">Foodora </font></b> ? </h5>
</center>

Pour ce faire, il est utile de regarder les données collectées en mars 2017 par Laetitia Dablanc et Leïla Saidi pour l'Ifstarr auprès de 97 livreurs parisiens. Après une modélisation statistique dont on vous épargne les détails (il s'agit d'une analyse en variable latente -voir ici pour plus de détails), il apparait qu'il y a  <b>trois profils-type de livreurs</b>.
<div class='graphLCA-title'>Un statut unique - une pluralité de situation </div>
<div class = "graph-container-wage">
    <div class= "graphLCA-column1">
        <div id="graphLCA" style="width: 470px; height: 550px; background-color: #FFFFFF;" ></div>
        <div class='graphLCA-text-column1'>
        <u><center> Les jeunes précaires</center></u>
        <i> Ces livreurs sont très jeunes, ont en grande majorité quitté tôt le système scolaire, ne viennent pas de Paris. Ils n'ont que la livraison comme activité professionnelle et l'effectuent toute la semaine sur de grandes tranches horaires journalières<br> Ce sont que nous considérons comme étant le plus <b>vulnérable</b> aux faiblesses du statut d'auto-entrepreneur qui n'est pas adapté à leur situation. </i> </div> 
    </div>
    <div class= "graphLCA-column2 ">
        <div id="graphLCA2" style="width:320px; height: 550px; background-color: #FFFFFF;" ></div>
        <div class='graphLCA-text-column'>
        <u><center> Les jeunes travailleurs </center></u>
        <i>Ce sont des personnes jeunes ayant à côté un emploi peu qualifié et qui utilisent leur revenus de livreurs comme appoint. D'où une activité limitée à certains jours de la semaine et durant moins de cinq heures par jour. Leur situation révèlerait une faiblesse de leur segment du marché du travail qui ne peut leur procurer l'ensemble de leur revenu.</i> </div>
    </div>
    <div class= "graphLCA-column2 ">
        <div id="graphLCA3" style="width: 320px; height: 550px; background-color: #FFFFFF;" ></div>
                <div class='graphLCA-text-column'>
        <u><center> Les étudiants "dilettantes" </center></u>
        <i>Ce sont des personnes un peu plus âgées qui sont en grand majorité encore en études. Ils ont plus tendance à habiter à Paris et utilisent la livraison comme un moyen d'arrondir leur fins de mois. On peut penser que cette activité n'est que transitoire dans leurs parcours et qu'ils en apprécient la flexibilité. </i> </div>
    </div>
</div>

<h5>
C'est donc à cette situation considérée par nous comme <b> préoccupante </b> que <b><font color="#e4032e">CoopCycle </font></b> cherche à répondre. </h5>
<br>

# En bref: un résumé graphique
 <section> <img src = "/images/context/comic.png" class = "img-responsive"></section> 

</div>