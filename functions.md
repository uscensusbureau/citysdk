---
layout: default
title: SDK Functions
nav: functions
---

### SDK Functions

The following functions are being considered for the beta release of the City SDK. 

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
</style>
<table class="tg">
  <tr>
    <th class="tg-031e">No.</th>
    <th class="tg-031e">Function Name</th>
    <th class="tg-031e">Output return</th>
    <th class="tg-031e">Input</th>
    <th class="tg-031e">Format</th>
    <th class="tg-031e">Use Case</th>
  </tr>
  <tr>
    <td class="tg-031e">1</td>
    <td class="tg-031e">grants()</td>
    <td class="tg-031e">List of available grants</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">1</td>
  </tr>
  <tr>
    <td class="tg-031e">2</td>
    <td class="tg-031e">loans()</td>
    <td class="tg-031e">List of low-cost loans</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">1</td>
  </tr>
  <tr>
    <td class="tg-031e">3</td>
    <td class="tg-031e">counseling_centers()</td>
    <td class="tg-031e">List of free counseling centers</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">1</td>
  </tr>
  <tr>
    <td class="tg-031e">4</td>
    <td class="tg-031e">resource_centers()</td>
    <td class="tg-031e">List of public resource centers</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">1</td>
  </tr>
  <tr>
    <td class="tg-031e">5</td>
    <td class="tg-031e">sr_programs()</td>
    <td class="tg-031e">List of statewide and regional programs</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">1</td>
  </tr>
  <tr>
    <td class="tg-031e">6</td>
    <td class="tg-031e">ct_programs()</td>
    <td class="tg-031e">List of city/ town programs</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">1</td>
  </tr>
  <tr>
    <td class="tg-031e">7</td>
    <td class="tg-031e">avg_hhincome()</td>
    <td class="tg-031e">Avergage household income data</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">2</td>
  </tr>
  <tr>
    <td class="tg-031e">8</td>
    <td class="tg-031e">sold_homes()</td>
    <td class="tg-031e">List of sold homes given a location and timeframe (i.e. past 0-6mo, past 6-12mo)</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">2</td>
  </tr>
  <tr>
    <td class="tg-031e">9</td>
    <td class="tg-031e">homesforsale()</td>
    <td class="tg-031e">List of home addresses currently for sale</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">2</td>
  </tr>
  <tr>
    <td class="tg-031e">10</td>
    <td class="tg-031e">avg_homesqft()</td>
    <td class="tg-031e">Average square footage of homes</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">2</td>
  </tr>
  <tr>
    <td class="tg-031e">11</td>
    <td class="tg-031e">home_programs()</td>
    <td class="tg-031e">List of homebuying programs</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">2</td>
  </tr>
  <tr>
    <td class="tg-031e">12</td>
    <td class="tg-031e">fed_laws()</td>
    <td class="tg-031e">List of Federal laws</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">3</td>
  </tr>
  <tr>
    <td class="tg-031e">13</td>
    <td class="tg-031e">county_laws()</td>
    <td class="tg-031e">List of county laws</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">3</td>
  </tr>
  <tr>
    <td class="tg-031e">14</td>
    <td class="tg-031e">city_laws()</td>
    <td class="tg-031e">List of city laws</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">3</td>
  </tr>
  <tr>
    <td class="tg-031e">15</td>
    <td class="tg-031e">tax_benefit()</td>
    <td class="tg-031e">Tax benefit information</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">3</td>
  </tr>
  <tr>
    <td class="tg-031e">16</td>
    <td class="tg-031e">buyer_rights()</td>
    <td class="tg-031e">Information on rights as a buyer</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">3</td>
  </tr>
  <tr>
    <td class="tg-031e">17</td>
    <td class="tg-031e">bus_stops()</td>
    <td class="tg-031e">List of nearby bus stops</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">4</td>
  </tr>
  <tr>
    <td class="tg-031e">18</td>
    <td class="tg-031e">bike_stations()</td>
    <td class="tg-031e">List of nearby bicycle stations</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">4</td>
  </tr>
  <tr>
    <td class="tg-031e">19</td>
    <td class="tg-031e">rail_stations()</td>
    <td class="tg-031e">List of nearby rail stations given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">4</td>
  </tr>
  <tr>
    <td class="tg-031e">20</td>
    <td class="tg-031e">train_stations()</td>
    <td class="tg-031e">List of nearby train stations</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">4</td>
  </tr>
  <tr>
    <td class="tg-031e">21</td>
    <td class="tg-031e">transport_distance()</td>
    <td class="tg-031e">Distance from transportation mode to housing community</td>
    <td class="tg-031e">Location; Transportation mode</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">4</td>
  </tr>
  <tr>
    <td class="tg-031e">22</td>
    <td class="tg-031e">crime_incidents()</td>
    <td class="tg-031e">List of crime incidents given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">4</td>
  </tr>
  <tr>
    <td class="tg-031e">23</td>
    <td class="tg-031e">healthcare_facilities()</td>
    <td class="tg-031e">List of healthcare facilities (i.e. hospitals, urgent care, pharmacy, etc.)</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">5</td>
  </tr>
  <tr>
    <td class="tg-031e">24</td>
    <td class="tg-031e">hcare_reviews()</td>
    <td class="tg-031e">List of online reviews (i.e. Yelp, Google)</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">5</td>
  </tr>
  <tr>
    <td class="tg-031e">25</td>
    <td class="tg-031e">senior_communities()</td>
    <td class="tg-031e">List of nearby senior communities</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">6</td>
  </tr>
  <tr>
    <td class="tg-031e">26</td>
    <td class="tg-031e">sc_monthlycost()</td>
    <td class="tg-031e">Monthly cost of senior community</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">6</td>
  </tr>
  <tr>
    <td class="tg-031e">27</td>
    <td class="tg-031e">senior_assist()</td>
    <td class="tg-031e">Yes/No based on living assistance eligibility of senior community</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">6</td>
  </tr>
  <tr>
    <td class="tg-031e">28</td>
    <td class="tg-031e">ada_access()</td>
    <td class="tg-031e">Yes/No based on ADA-accessibility of senior community</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">7</td>
  </tr>
  <tr>
    <td class="tg-031e">29</td>
    <td class="tg-031e">ada_homes()</td>
    <td class="tg-031e">List of nearby ADA-accessible homes</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">7</td>
  </tr>
  <tr>
    <td class="tg-031e">30</td>
    <td class="tg-031e">avg_age()</td>
    <td class="tg-031e">Average age</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">7</td>
  </tr>
  <tr>
    <td class="tg-031e">31</td>
    <td class="tg-031e">rental_vouch()</td>
    <td class="tg-031e">Yes/No based on rental voucher acceptance</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">8</td>
  </tr>
  <tr>
    <td class="tg-031e">32</td>
    <td class="tg-031e">housing_avail()</td>
    <td class="tg-031e">Occupancy/ availability metric</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">8</td>
  </tr>
  <tr>
    <td class="tg-031e">33</td>
    <td class="tg-031e">rent2own()</td>
    <td class="tg-031e">List of rent to own statistics (property and/ or owners)</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">9</td>
  </tr>
  <tr>
    <td class="tg-031e">34</td>
    <td class="tg-031e">job_stats()</td>
    <td class="tg-031e">List of job statistics (e.g. industry, employment rate, etc.)</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">10</td>
  </tr>
  <tr>
    <td class="tg-031e">35</td>
    <td class="tg-031e">transport_modes()</td>
    <td class="tg-031e">List of available transportation modes (i.e. bus stop, rail station, etc.)</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">10</td>
  </tr>
  <tr>
    <td class="tg-031e">36</td>
    <td class="tg-031e">avg_workdist()</td>
    <td class="tg-031e">List of average distance to work</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">11</td>
  </tr>
  <tr>
    <td class="tg-031e">37</td>
    <td class="tg-031e">crime_incidents()</td>
    <td class="tg-031e">List of crime incidents given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">12</td>
  </tr>
  <tr>
    <td class="tg-031e">38</td>
    <td class="tg-031e">walk_score()</td>
    <td class="tg-031e">Walk score</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">12</td>
  </tr>
  <tr>
    <td class="tg-031e">39</td>
    <td class="tg-031e">sex_offenders()</td>
    <td class="tg-031e">List of sex offenders</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">12</td>
  </tr>
  <tr>
    <td class="tg-031e">40</td>
    <td class="tg-031e">street_lights()</td>
    <td class="tg-031e">List of street lights</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">12</td>
  </tr>
  <tr>
    <td class="tg-031e">41</td>
    <td class="tg-031e">building_permits()</td>
    <td class="tg-031e">List of building permits given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">13</td>
  </tr>
  <tr>
    <td class="tg-031e">42</td>
    <td class="tg-031e">new_resconstruction()</td>
    <td class="tg-031e">List of new residential construction given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">13</td>
  </tr>
  <tr>
    <td class="tg-031e">43</td>
    <td class="tg-031e">new_ressales()</td>
    <td class="tg-031e">List of new residential sales given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">13</td>
  </tr>
  <tr>
    <td class="tg-031e">44</td>
    <td class="tg-031e">new_mansales()</td>
    <td class="tg-031e">List of manufactured housing given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">13</td>
  </tr>
  <tr>
    <td class="tg-031e">45</td>
    <td class="tg-031e">construct_spending()</td>
    <td class="tg-031e">List of construction spending given a location</td>
    <td class="tg-031e">Location</td>
    <td class="tg-031e">JSON</td>
    <td class="tg-031e">13</td>
  </tr>
</table>