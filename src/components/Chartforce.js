import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";

class Graficoforce extends Component {
    componentDidMount() {
        // Create chart
        let chart = am4core.create("chartdivforce", am4plugins_forceDirected.ForceDirectedTree);
        // Create series
        let series = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
        // Set up data fields
        series.dataFields.value = "value";
        series.dataFields.name = "name";
        series.dataFields.children = "children";
        series.dataFields.collapsed = "0";
        series.data = [
            {
              name: "HABILIDADES",
              value: 100,
              children: [
                {
                  name: "FRONTEND",
                  value: 80,
                  children: [
                    {
                      name: "CSS", value: 50, children: [
                        { name: "Saas", value: 25 },
                        { name: "Tailwind", value: 25 },
                        { name: "Bootstrap", value: 25 },
                      ]
                    },
                    {
                      name: "JS", value:50, children: [
                        { name: "REACT", value: 50, children: [
                          { name: "Styled Components", value: 25 },
                          { name: "Material UI", value: 25 },
                          { name: "Hooks", value: 25 },
                          { name: "Next.js", value: 25 }
                          ]
                    },
                        { name: "TYPESCRIPT", value: 35 },
                        { name: "THREE.JS", value: 25 }
                      ]
                    },
                    { name: "HTML5", value: 50 },
                  ]
                },
                {
                  name: "MKT",
                  value: 40,
                  children: [  
                      { name: "SEO", value: 25},
                      { name: "Google Analytics", value: 25},
                      { name: "Instagram ADS", value: 25},
                  ]
                },
                {
                  name: "BACKEND",
                  value: 70,
                  children: [
                    {
                      name: "API'S", value: 40, children: [
                        { name: "REST/API", value: 25 },
                        { name: "Microserviços", value: 25 },
                        { name: "Integração de Dados", value: 25 }
                      ]
                    },
                    {
                      name: "BANCO DE DADOS", value: 40, children: [
                        { name: "MySQL", value: 25 },
                        { name: "NoSQL", value: 25},
                      ]
                    },
                      {
                      name: "LINGUAGENS", value: 40,
                       children: [
                        { name: "JS", value: 40, children: [
                            {name: "Node.js", value: 25},
                            {name: "Jest", value: 25},
                            {name: "Nest/Express", value: 25}
                        ]},
                        { name: "PHP", value: 40, children: [
                            {name: "Wordpress", value: 35}
                        ] },
                      ]
                    }
                  ]
                },
                {
                    name: "DESIGN",
                    value: 60,
                    children: [  
                        { name: "Criação de Logotipos", value: 40},
                        { name: "UI/UX", value: 40},
                        { name: "Prototipagem / Figma", value: 40},
                    ]
                  },         
              ]
            }
          ];
        // NODES
        series.nodes.template.label.text = "[bold]{name}[/]";
        series.nodes.template.outerCircle.filters.push(new am4core.DropShadowFilter());
        series.nodes.template.togglable = true;
        series.nodes.template.tooltipText = "{name}";
        //series.nodes.template.events.on("hit", function(event) {chart.zoomToDataItem(event.target.dataItem, 1.2, true)});
        series.maxLevels = 5;
        series.fontSize = 16;
        series.minRadius = 0;
        series.maxRadius = 100;
        series.links.template.distance = 1.3;
        series.links.template.tooltipText = "{name}: [bold]{value}[/]";
        series.links.template.interactionsEnabled = true;
        series.links.template.strokeWidth = 5;
        series.links.template.strokeOpacity = 0.6;
        chart.zoomable = true;
        series.colors.list = [
          am4core.color("#f26419"),
          am4core.color("#9E0059"),
          am4core.color("#9E0059"),
          am4core.color("#f26419"),
          am4core.color("#FFBD00"),
          am4core.color("#FFBD00"),
          am4core.color("#390099"),
          am4core.color("#390099"),
          am4core.color("#FF0054"),
        ];    

    }  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }  
    render() {
      return (
        <div id="chartdivforce" style={{ width: "100%", height: "100vh", position: "fixed", top: "0", left: "0"}}>
        </div>
      );
    }
  }
  export default Graficoforce;