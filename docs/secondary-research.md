---
name: secondary research report
description: Other sources, articles, synthesis, comparative analys
tags:
  - research
  - sources
  - synthesis
  - articles
---
# Executive Summary

Secondary research confirms and sharpens the design direction surfaced in primary user interviews. Three consistent principles emerge across the literature and competitive landscape.

**Cognitive load is the central accessibility problem.** Research on audible pedestrian signals shows that more information does not mean better navigation — cleaner, more directional feedback leads to safer outcomes for blind pedestrians and those with cognitive disabilities alike. A CDC report found that adults with disabilities experience mental distress at 4.6 times the rate of those without disabilities, and that over half of those with both cognitive and mobility disabilities report frequent mental distress. A study on digital emotion-mapping in urban environments further confirms that technically accessible spaces can still create anxiety and confusion at high-traffic decision points like crossings and intersections. Taken together, the research makes a strong case that EasyGo must prioritize clarity and simplicity above feature breadth — low cognitive load is not just a design preference, it is an accessibility requirement.

**The competitive landscape is fragmented and feature-incomplete.** No single existing tool combines the full feature set EasyGo is targeting. Google Maps has the largest reach and recently added wheelchair-accessible transit routing, but lacks real-time sidewalk hazard data and community reporting. Wheelmap and AccessMap both use OpenStreetMap and offer wheelchair-focused features, but neither has the combination of crowdsourced hazard reporting, route planning, and transit integration in one experience. The Seattle Accessible Route Planner (Esri) and OpenSidewalks project offer sidewalk-specific data layers but are not consumer-facing products. This leaves a clear gap for a unified, community-maintained tool built for pedestrian navigation with disabilities as the primary use case, not an afterthought.

**Typography and visual design choices can directly reduce stress.** Lexend, a variable font developed specifically to reduce visual stress and improve reading performance for users with dyslexia, is identified as a strong candidate for EasyGo's primary typeface. It is an accessible-by-default choice that benefits all users, not just those with reading disabilities — consistent with inclusive design principles.

The secondary research aligns closely with primary interview findings: users need real-time, reliable, low-friction information about whether a route is navigable. The literature gives design rationale for _how_ to surface that information — clearly, directionally, and with emotional outcomes in mind, not just functional task completion.

---
# Methodology

This secondary research phase took two parallel approaches to build an evidence base for EasyGo's design and feature decisions.

The first was a review of published academic and public health literature. Three sources were selected for their direct relevance to the core design challenges: accessible pedestrian signal design, the relationship between disability and mental health, and how urban environments create emotional and cognitive load for pedestrians with disabilities. The goal was to extract design principles that can be directly applied to the app's information architecture, routing logic, and visual design.

The second was a comparative analysis of existing apps and services that address accessibility and navigation in urban environments. Six tools were reviewed and tagged by feature set — including underlying map service, routing capabilities, wheelchair access data, community-contributed content, and sidewalk-specific data layers. This analysis was intended to identify where EasyGo can differentiate and where it can build on proven approaches rather than reinventing them.

---
# Relevant Sources
## Articles
- [Audible Beaconing with Accessible Pedestrian Signals - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC2901122/)
- [Many Adults with Disabilities Report Frequent Mental Distress](https://www.cdc.gov/disability-and-health/articles-documents/adults-with-disabilities-mental-distress.html)
- [Digital Emotion-Mapping for Barrier-Free Design. How User-Specific Assessment of Environmental Experience Helps to Design Better Cities](https://link.springer.com/chapter/10.1007/978-3-662-69139-7_20)

## Related Apps/Services

- [Seattle's Steepest Streets](https://joeyklee.github.io/seattle-steepest-streets/#13.57/47.62408/-122.31632)
- [Introducing “wheelchair accessible” routes in transit navigation](https://blog.google/products/maps/introducing-wheelchair-accessible-routes-transit-navigation/)
- [Wheelmap – Find wheelchair accessible places.](https://wheelmap.org/)
- [AccessMap](https://www.accessmap.app/?region=wa.seattle&lon=-122.334298&lat=47.606386&z=13)
	- [AccessMap · GitHub](https://github.com/accessmap)
- [Seattle Accessible Route Planner]([https://seattlecitygis.maps.arcgis.com/apps/webappviewer/index.html?id=86cb6824307c4d63b8e180ebcff58ce2](https://experience.arcgis.com/template/2a2d345b9f5644af90120233ece9f675))
- [Seattle Crosswalk Accessibility Map](https://michaelthoreau.github.io/pedestrian-sketchiness-map/)

# Article Synthesis

## Audible Beaconing with Accessible Pedestrian Signals
(https://pmc.ncbi.nlm.nih.gov/articles/PMC2901122/)
- Accessible crossing technology becomes significantly more effective when audio feedback functions as a clear directional beacon rather than simply broadcasting crossing information, resulting in safer navigation for for not only blind pedestrians, but those with cognitive disabilities as well
- More information is not necessarily better; clearer and more directional feedback is better. This can be related to the [UX Law of Cognitive load](https://lawsofux.com/cognitive-load/). 
- **Outcome: Clearer information on the app, especially for direction and wayfinding should be a top priority. Reduce the cognitive load for users.**
## Many Adults with Disabilities Report Frequent Mental Distress
(https://www.cdc.gov/disability-and-health/articles-documents/adults-with-disabilities-mental-distress.html)
- "Adults with disabilities reported mental distress 4.6 times as often as those without disabilities." 
- "More than half of all adults with both cognitive and mobility disabilities reported mental distress."
- "Increasing social cohesion, community participation, access to health promotion opportunities"
- **Outcome: This app supports increased community participation and access to healthcare resources. Designing for a low cognitive load helps reduce friction and frustration, creating a more accessible experience for users who may experience cognitive disabilities or mental distress.**
## Digital Emotion-Mapping for Barrier-Free Design. How User-Specific Assessment of Environmental Experience Helps to Design Better Cities
(https://link.springer.com/chapter/10.1007/978-3-662-69139-7_20)
- This article has a lot information about how urban design affects pedestrians, especially those with disabilities, measured by different tools that measure different metrics such as biodata.
- One of the key aspects was how an urban planning choice could be made that is technically accessible, but can still create anxiety, cognitive overload, or uncertainty. "...unpleasant emotional responses are also typically located at spots of high traffic or traffic-related interactions (road crossings, parking lots), while positive emotions or pleasant reactions can be found in rather calm and spacious areas along the route."
- **Outcome: A user may be able to complete a task. However, if the experience is frustrating, confusing, or mentally exhausting, the design is still failing. Emotional outcomes need to be considered, a long with a logical way to determine the best paths to increase positive emotion.**
# Comparative Analysis

| App/Service                                                                                                                                                         | Underlying map service   | Features                                                                                                       |     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- | --- |
| Seattle's Steepest Streets<br>https://joeyklee.github.io/seattle-steepest-streets/#13.57/47.62408/-122.31632                                                        | OpenStreetMaps           | #grade #streetview                                                                                             |     |
| Introducing “wheelchair accessible” routes in transit navigation<br>https://blog.google/products/maps/introducing-wheelchair-accessible-routes-transit-navigation/) | Google Maps              | #routeplanner #publictransit #wheelchair #streetview #user-photos #community-added-content #poi #vehicle #bike |     |
| Wheelmap<br>https://wheelmap.org/                                                                                                                                   | OpenStreetMaps \| Mapbox | #wheelchair #user-photos #community-added-content                                                              |     |
| Accessmap<br>https://www.accessmap.app/?region=wa.seattle&lon=-122.334298&lat=47.606386&z=13                                                                        | OpenStreetMaps \| Mapbox | #routeplanner #wheelchair #grade #community-added-content #poi #publictransit #sidewalks                       |     |
| OpenSidwalks<br>https://sidewalks.washington.edu/                                                                                                                   | OpenStreetMaps           | #sidewalks                                                                                                     |     |
| Seattle Accessible Rout Planner<br>https://experience.arcgis.com/template/2a2d345b9f5644af90120233ece9f675                                                          | Esri                     | #sidewalks #wheelchair #publictransit #routeplanner #layers                                                    |     |
|                                                                                                                                                                     |                          |                                                                                                                |     |

# Other

## Lexend font
https://fonts.google.com/specimen/Lexend/about?preview.script=Latn
https://www.lexend.com/
"Lexend fonts are intended to reduce visual stress and so improve reading performance. Initially they were designed with dyslexia and struggling readers in mind, but Bonnie Shaver-Troup, creator of the Lexend project, soon found out that these fonts are also great for everyone else."
**Outcome: Lexend was made for those with dyslexia to reduce visual stress. Any chance to lower stress and cognitive load should be used.** 

---
# Final Outcomes

- Focus on reducing cognitive load whenever possible
- OpenStreetMaps is the best map service to use
- Adopt Lexend as EasyGo's primary typeface to reduce visual stress and support users with dyslexia and reading disabilities
- Design for emotional outcomes, not just task completion — a technically navigable route that causes anxiety or confusion is still a failed experience
- Build crowdsourced hazard reporting as a core feature — no competitor currently combines this with route planning in a consumer-facing product
- Implement a routing priority hierarchy: avoid marked hazards → avoid construction → prefer lowest grade → prefer accessible crosswalks → prefer wheelchair-accessible POIs → prefer signalized intersections
- Support community participation as a design goal in itself — increasing access to navigation and resources directly addresses the mental distress burden documented in CDC research on adults with disabilities
