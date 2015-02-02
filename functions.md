---
layout: default
title: SDK Functions
nav: functions
---

### SDK Functions

The following functions are being considered for the beta release of the City SDK. 

<table class="table-code">
<thead>
<tr>
<th>SDK Function </th>
<th>Output Return</th>
</tr>
</thead>
<tbody>
<tr>


</tr>

</tbody>
</table>



| No. | Function Name           | Output return                                                                    | Input                         | Format | Use Case |
|-----|-------------------------|----------------------------------------------------------------------------------|-------------------------------|--------|----------|
| 1   | grants()                | List of available grants                                                         | Location                      | JSON   | 1        |
| 2   | loans()                 | List of low-cost loans                                                           | Location                      | JSON   | 1        |
| 3   | counseling_centers()    | List of free counseling centers                                                  | Location                      | JSON   | 1        |
| 4   | resource_centers()      | List of public resource centers                                                  | Location                      | JSON   | 1        |
| 5   | sr_programs()           | List of statewide and regional programs                                          | Location                      | JSON   | 1        |
| 6   | ct_programs()           | List of city/ town programs                                                      | Location                      | JSON   | 1        |
| 7   | avg_hhincome()          | Avergage household income data                                                   | Location                      | JSON   | 2        |
| 8   | sold_homes()            | List of sold homes given a location and timeframe (i.e. past 0-6mo, past 6-12mo) | Location                      | JSON   | 2        |
| 9   | homesforsale()          | List of home addresses currently for sale                                        | Location                      | JSON   | 2        |
| 10  | avg_homesqft()          | Average square footage of homes                                                  | Location                      | JSON   | 2        |
| 11  | home_programs()         | List of homebuying programs                                                      | Location                      | JSON   | 2        |
| 12  | fed_laws()              | List of Federal laws                                                             | Location                      | JSON   | 3        |
| 13  | county_laws()           | List of county laws                                                              | Location                      | JSON   | 3        |
| 14  | city_laws()             | List of city laws                                                                | Location                      | JSON   | 3        |
| 15  | tax_benefit()           | Tax benefit information                                                          | Location                      | JSON   | 3        |
| 16  | buyer_rights()          | Information on rights as a buyer                                                 | Location                      | JSON   | 3        |
| 17  | bus_stops()             | List of nearby bus stops                                                         | Location                      | JSON   | 4        |
| 18  | bike_stations()         | List of nearby bicycle stations                                                  | Location                      | JSON   | 4        |
| 19  | rail_stations()         | List of nearby rail stations given a location                                    | Location                      | JSON   | 4        |
| 20  | train_stations()        | List of nearby train stations                                                    | Location                      | JSON   | 4        |
| 21  | transport_distance()    | Distance from transportation mode to housing community                           | Location; Transportation mode | JSON   | 4        |
| 22  | crime_incidents()       | List of crime incidents given a location                                         | Location                      | JSON   | 4        |
| 23  | healthcare_facilities() | List of healthcare facilities (i.e. hospitals, urgent care, pharmacy, etc.)      | Location                      | JSON   | 5        |
| 24  | hcare_reviews()         | List of online reviews (i.e. Yelp, Google)                                       | Location                      | JSON   | 5        |
| 25  | senior_communities()    | List of nearby senior communities                                                | Location                      | JSON   | 6        |
| 26  | sc_monthlycost()        | Monthly cost of senior community                                                 | Location                      | JSON   | 6        |
| 27  | senior_assist()         | Yes/No based on living assistance eligibility of senior community                | Location                      | JSON   | 6        |
| 28  | ada_access()            | Yes/No based on ADA-accessibility of senior community                            | Location                      | JSON   | 7        |
| 29  | ada_homes()             | List of nearby ADA-accessible homes                                              | Location                      | JSON   | 7        |
| 30  | avg_age()               | Average age                                                                      | Location                      | JSON   | 7        |
| 31  | rental_vouch()          | Yes/No based on rental voucher acceptance                                        | Location                      | JSON   | 8        |
| 32  | housing_avail()         | Occupancy/ availability metric                                                   | Location                      | JSON   | 8        |
| 33  | rent2own()              | List of rent to own statistics (property and/ or owners)                         | Location                      | JSON   | 9        |
| 34  | job_stats()             | List of job statistics (e.g. industry, employment rate, etc.)                    | Location                      | JSON   | 10       |
| 35  | transport_modes()       | List of available transportation modes (i.e. bus stop, rail station, etc.)       | Location                      | JSON   | 10       |
| 36  | avg_workdist()          | List of average distance to work                                                 | Location                      | JSON   | 11       |
| 37  | crime_incidents()       | List of crime incidents given a location                                         | Location                      | JSON   | 12       |
| 38  | walk_score()            | Walk score                                                                       | Location                      | JSON   | 12       |
| 39  | sex_offenders()         | List of sex offenders                                                            | Location                      | JSON   | 12       |
| 40  | street_lights()         | List of street lights                                                            | Location                      | JSON   | 12       |
| 41  | building_permits()      | List of building permits given a location                                        | Location                      | JSON   | 13       |
| 42  | new_resconstruction()   | List of new residential construction given a location                            | Location                      | JSON   | 13       |
| 43  | new_ressales()          | List of new residential sales given a location                                   | Location                      | JSON   | 13       |
| 44  | new_mansales()          | List of manufactured housing given a location                                    | Location                      | JSON   | 13       |
| 45  | construct_spending()    | List of construction spending given a location                                   | Location                      | JSON   | 13       |

