+++
draft = false
title = "Contexte"
description = "La rumeur gronde."
lang = "fr"
menu = "main"
weight = 2
slug = "contexte"
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
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
<!-- amCharts javascript code -->
<script type="text/javascript", src="/charts.js"></script>
<script type="text/javascript", src="/maps.js"></script>
<script type="text/javascript", src="/additional_widget.js"></script>


# Une situation sociale tendue


 

<div ></br>
    <center>
    <h3> De plus en plus de livreurs en grève  </h3>
    </center>
</div>

*Depuis août 2016, les livreurs des plateformes de foodtech ne cessent de manifester leur mécontentement en se mettant en grève. Leur cadre légal ne le permettant pas, ils se "déconnectent" le temps de leur journée de travail. Ce qui a mis le feu aux poudres: l'abandon du paiement horaire pour le paiement à la course (5,75€).*
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

*La carte indique la répartition des incidents relatifs aux entreprises de livraison instantanée (Foodora, Glovo, Deliveroo), incidents regroupant les grèves de livreurs, les manifestations contre les conditions de travail des livreurs, mais également les blocages de restaurant, le "gameroo" qui consiste à demander aux restaurants de déconnecter leur tablette des dites entreprises ainsi que des sitting dans les bureaux des companies.*
<p align=right>Données: Transnational Food Platform Strike, <br /> recueillies par Jérôme Pimot et Callum Cant </p>

# Un secteur économique en pleine croissance ?

On ne cesse de vanter la santé économique du marché de la foodtech en pleine croissance.


<div id="chartdiv1" style="width: 100%; height: 400px; background-color: #FFFFFF;" ></div>


 <div id="deliveroo" style="width: 100%; height: 400px; background-color: #FFFFFF;" ></div>

<p class="triangle-border right" align="right">
  <b> « La victoire reviendra à celui qui est prêt à perdre de l’argent le plus longtemps » </b> </br> Take Eat Easy , société fondée en 2013, en faillite en 2016 </p>

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
    Dernièrement (mars 2018), Deliveroo s'est retrouvé une nouvelle fois devant la justice pour justifier de son rapport avec les livreurs. En effet est en jeu la notion de <i> lien de subordination </i> propre au contrat salarial classique. Nouvelle donne: cette fois-ci l'URSSAF et l'inspection du travail appuient cette demande de requalification de ces contrats, estimant qu'il y a donc fraude aux cotisations salariales de la part de Deliveroo. Or ce montant s'élèverait selon ces organismes à plus de 6.4 millions d'euros. 
    </div>
</div>



# En bref
 <section> <img src = "/images/context/comic.png" class = "img-responsive"></section> 

