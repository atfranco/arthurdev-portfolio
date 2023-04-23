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
              value: 150,
              children: [
                {
                  name: "FRONTEND",
                  value: 104,
                  children: [
                    {
                      name: "CSS", value: 80, children: [
                        { name: "SCSS", value: 60 },
                        { name: "TAILWIND", value: 60 },
                        { name: "BOOTSTRAP", value: 60 },
                      ]
                    },
                    {
                      name: "JS", value:80, children: [
                        { name: "REACT", value: 70, children: [
                          { name: "STYLED COMP", value: 50 },
                          { name: "MATERIAL UI", value: 50 },
                          { name: "HOOKS", value: 50 },
                          { name: "NEXT.JS", value: 50 }
                          ]
                    },
                        { name: "TYPESCRIPT", value: 50 },
                        { name: "THREE.JS", value: 50 }
                      ]
                    },
                    { name: "HTML5", value: 70 },
                  ]
                },
                {
                  name: "MKT",
                  value: 103,
                  children: [  
                      { name: "SEO", value: 40},
                      { name: "ANALYTICS", value: 30},
                      { name: "INSTAGRAM ADS", value: 40},
                  ]
                },
                {
                  name: "BACKEND",
                  value: 102,
                  children: [
                    {
                      name: "API'S", value: 80, children: [
                        { name: "REST/API", value: 60 },
                        { name: "FUNÇÕES", value: 50 },
                        { name: "INTEGRAR DADOS", value: 40 }
                      ]
                    },
                    {
                      name: "BANCO DE DADOS", value: 70, children: [
                        { name: "MYSQL", value: 50 },
                        { name: "NOSQL", value: 50},
                      ]
                    },
                      {
                      name: "LINGUAGENS", value: 70,
                       children: [
                        { name: "JS", value: 70, children: [
                            {name: "NODE", value: 40},
                            {name: "Jest", value: 30},
                            {name: "Nest/Express", value: 40}
                        ]},
                        { name: "PHP", value: 70, children: [
                            {name: "WORDPRESS"}
                        ] },
                      ]
                    }
                  ]
                },
                {
                    name: "DESIGN",
                    value: 100,
                    children: [  
                        { name: "CRIAÇÃO DE LOGOTIPOS", value: 60},
                        { name: "IDENTIDADE VISUAL", value: 70},
                        { name: "UI/UX", value: 80},
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
        series.minRadius = 30;
        series.maxRadius = 100;
        series.links.template.distance = 1.1;
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