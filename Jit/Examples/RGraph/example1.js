var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = 20 + 'px';
    this.elem.style.top = 640 + 'px';
    
  }
};


function init(){
    //init data
    var json = {
        id: "190_0",
        name: "University",
        children: [{
            id: "1",
            name: "Activities",
            data: {
                relation: "<h4>Activities</h4><b>Connections:</b><ul><li>Sport</li><li>Extracurricular</li><li>Party</li><li>Tutoring</li><li>Cultural</li><li>Courses</li><li>Exams</li></ul>"
            },
            children: [{
                id: "1_6",
                name: "Sport",
                data: {
                    relation: "<h4>Temple of the Dog</h4><b>Connections:</b><ul><li>Jeff Ament <div>(relation: member of band)</div></li></ul>"
                },
                children: []
            }, {
                id: "1_2",
                name: "Extracurricular",
                data: {
                    relation: "<h4>Extracurricular activities</h4>"
                },
                children: []
            }, {
                id: "4_3",
                name: "Party",
                data: {
                    relation: "<h4>All the party related to university life</h4>"
                },
                children: []
            }, {
                id: "1_4",
                name: "Tutoring",
                data: {
                    relation: "<h4>Tutoring activities</h4><div>(Knowledge from students to students)</div>"
                },
                children: []
            }, {
                id: "1_5",
                name: "Cultural",
                data: {
                    relation: "<h4>Cultural activities</h4>"
                },
                children: []
            }, {
                id: "1_1",
                name: "Courses",
                data: {
                    relation: "<h4>Courses</h4><b>Connections:</b><ul><li>Labs</li><li>Projects</li><li>Homeworks</li></ul>"
                },
                children: [{
                	id: "1_7",
               		name: "Projects",
                	data: {
                    	relation: "<h4>Projects</h4>"
                	},
               	}, {             
            		id: "1_8",
            		name: "Labs",
            		data: {
               			relation: "<h4>Labs</h4>"
            		},
            		children: []    
            	}, {             
            		id: "1_9",
            		name: "Homeworks",
            		data: {
               			relation: "<h4>Homeworks</h4>"
            		},
            		children: []    
            	}, {             
            		id: "1_10",
            		name: "Exams",
            		data: {
               			relation: "<h4>Exams</h4>"
            		},
            		children: []    
            	}]
            }]
        }, {
            id: "2",
            name: "Professors",
            data: {
                relation: "<h4>Professors</h4><b>Connections:</b><ul><li>Communication</li><li>Teaching</li><li>Research</li><li>Conferences</li><li>Study evaluation</li><li>Exams</li></ul>"
            },
            children: [{
                id: "2_5",
                name: "Study evaluation",
                data: {
                    relation: "<h4>Study evaluation</h4>"
                },
                children: [{
                	id: "1_10",
                	name: "Exams",
                	data: {
                    	relation: "<h4>Exams</h4>"
                	},
                	children: []
            	}]
            }, {
                id: "2_1",
                name: "Communication",
                data: {
                    relation: "<h4>Communication/h4>"
                },
                children: []
            }, {
                id: "2_3",
                name: "Research",
                data: {
                    relation: "<h4>Research</h4>"
                },
                children: []
            }, {
                id: "2_2",
                name: "Teaching",
                data: {
                    relation: "<h4>Teaching</h4>"
                },
                children: [{
               		id: "2_2_1",
                	name: "Lectures",
                	data: {
                    	relation: "<h4>Lectures</h4>"
                	},
                	children: []
                },{
               		id: "2_2_2",
                	name: "Seminars",
                	data: {
                    	relation: "<h4>Seminars</h4>"
                	},
                	children: []
                },{
               		id: "2_2_3",
                	name: "Materials",
                	data: {
                    	relation: "<h4>Materials</h4>"
                	},
                	children: []
                },{
               		id: "2_2_4",
                	name: "Books",
                	data: {
                    	relation: "<h4>Books</h4>"
                	},
                	children: []
                }]
            }, {
                id: "2_4",
                name: "Conferences",
                data: {
                    relation: "<h4>Conferences</h4>"
                },
                children: [{
               		id: "3_1",
                	name: "Science",
                	data: {
                    	relation: "<h4>Science</h4>"
                	},
                	children: []
            	}]
            }]
        }, {
            id: "3",
            name: "Interests",
            data: {
                relation: "<h4>Interests</h4><b>Connections:</b><ul><li>Science</li><li>Job</li><li>Education</li></ul>"
            },
            children: [{
                id: "3_1",
                name: "Science",
                data: {
                    relation: "<h4>Mad Season</h4><b>Connections:</b><ul><li>Mike McCready <div>(relation: member of band)</div></li></ul>"
                },
                children: []
            }, {
                id: "3_2",
                name: "Job",
                data: {
                    relation: "<h4>$10,000 Gold Chain</h4><b>Connections:</b><ul><li>Mike McCready <div>(relation: collaboration)</div></li></ul>"
                },
                children: [{
                	id: "3_2_1",
               		name: "Part time job",
                	data: {
                    	relation: "<h4>Work and study together</h4>"
                	},
                	children: []
           	 	}, {
                	id: "4_2_2",
                	name: "Internship",
                	data: {
                    	relation: "<h4>Internship</h4>"
                	},
                	children: []
            	},{
                	id: "4_2_3",
                	name: "Full time job",
                	data: {
                    	relation: "<h4>Full time job according to specialization</h4>"
                	},
                	children: []
            }]
            }, {
                id: "3_5",
                name: "Education",
                data: {
                    relation: "<h4>Education</h4><div>Those who study for general purpose of education,</div>"
                },
                children: []
            }, {
                id: "3_6",
                name: "Research",
                data: {
                    relation: "<h4>Research</h4><div>Education for a sake of further research on some problem</div>"
                },
                children: []
            }]
        }, {
            id: "6",
            name: "Students",
            data: {
                relation: "<h4>Students</h4><b>Connections:</b><ul><li>Friends</li><li>Cources</li><li>Party</li></ul>"
            },
            children: [{
                id: "6_1",
                name: "Friends",
                data: {
                    relation: "<h4>Soundgarden</h4><b>Connections:</b><ul><li>Matt Cameron <div>(relation: member of band)</div></li></ul>"
                },
                children: []
            }, {
                id: "1_1",
                name: "Courses",
                data: {
                    relation: "<h4>Students must attend courses</h4>"
                },
                children: []
            }, {
                id: "6_3",
                name: "Party",
                data: {
                    relation: "<h4>Party</h4>"
                },
                children: []
            }, {
                id: "6_4",
                name: "Experience",
                data: {
                    relation: "<h4>Experience</h4"
                },
                children: []
            }]
        },{
            id: "5",
            name: "Facilities",
            data: {
                relation: "<h4>Facilities</h4><b>Connections:</b><ul><li>Library</div></li><li>Dormitory</li><li>Cafeterias</li></ul>"
            },
            children: [{
                id: "5_1",
                name: "Library",
                data: {
                    relation: "<h4>Library</h4>"
                },
                children: [{
                	id: "2_2_4",
                	name: "Books",
                	data: {
                    	relation: "<h4>Books</h4>"
                	},
                	children: []
			}]
            }, {
                id: "5_2",
                name: "Dormitory",
                data: {
                    relation: "<h4>Dormitory</h4>"
                },
                children: []
            }, {
                id: "5_3",
                name: "Cafeterias",
                data: {
                    relation: "<h4>Cafeterias or canteen</h4>"
                },
                children: []
            }, {
                id: "5_4",
                name: "Laboratories",
                data: {
                    relation: "<h4>Research labs</h4>"
                },
                children: []
            }]
        }],
        data: {
            relation: "<h4>University</h4><b>Connections:</b><ul><li>Students<div>(people who study)</div></li><li>Professors<div>(people who teach)</div></li><li>Activities<div>(all activities related to university life)</div></li><li>Interests<div>(All the interests of University members)</div></li></ul>"
        }
    };
    //end
    
    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#282F36'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#ddeeff'
        },
        
        Edge: {
          color: '#64A0E6',
          lineWidth:1.5
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        onAfterCompute: function(){
            Log.write("done");
        },
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id);
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth <= 1) {
                style.fontSize = "1.2em";
                style.color = "#FFFEFC";
            
            } else if(node._depth === 2){
                style.fontSize = "0.9em";
                style.color = "#D0A65B";
            
            } 
            else if(node._depth === 3){
                style.fontSize = "0.7em";
                style.color = "#gray";
            
            } 
            else if(node._depth === 4){
                style.fontSize = "0.5em";
                style.color = "#444444";
            
            }
             else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-100, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 1500
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
