$(function (){
    $('[data-toggle="tooltip"]').tooltip();


    $('#sidebar').on('show.bs.collapse', function (e) {
        if(e.target==this){
            $('#main-content').addClass('col-md-10'); 
        }
    })
    
    $('#sidebar').on('hide.bs.collapse', function (e) {
        if(e.target==this){
          $('#main-content').removeClass('col-md-10');}
      })
    
    var ch1 =$('#chart1');
    var chart1 = new Chart(ch1,{
        type:'line',
        data:{
              labels:['1','2','3','4','5','6','7'],

              datasets:[{
                  data:[90,40,120,160,180,190,145],
                  backgroundColor:'#46ccff',
                  borderColor:'#fff' ,
                  pointBackgroundColor:'#fff',
              }]
              
          },
        options:{
                scales:{
                    yAxes:[{display:false}],
                    xAxes:[{display:false}]
                },
                legend:{display:false},
                layout:{
                    padding:{
                        left:5,
                        right:5,
                        top:5,
                        bottom:5
                    }
                }
            }


        })
        /*********** 1*/
    var ch2 =$('#chart2');
    var chart2 = new Chart (ch2,{
        type:'bar',
        data:{
            labels:['1','2','3','4','5','6','7'],

            datasets:[{
                  data:[90,40,120,160,180,190,145],
                  backgroundColor:'#46ccff',
                  borderColor:'#fff' ,
                  pointBackgroundColor:'#fff',
              }]
              
          },
        options:{
            Scales:{
                yAxes:[{display:false}],
                xAxes:[{display:false}]
                },
            legend:{display:false},
            layout:{
                padding:{
                    left:5,
                    right:5,
                    top:5,
                    bottom:5
                    }
                }
            }


        })
        /*********** 2*/
    var ch3 =$('#chart3');
    var chart3 = new Chart(ch3,{
        type:'line',
        data:{
              labels:['1','2','3','4','5','6','7'],

              datasets:[{
                  data:[90,40,120,160,180,190,145],
                  backgroundColor:'#fff',
                  borderColor:'#fff' ,
                  pointBackgroundColor:'#fff',
              }]
              
          },
        options:{
                scales:{
                    yAxes:[{display:false}],
                    xAxes:[{display:false}]
                },
                legend:{display:false},
                layout:{
                    padding:{
                        left:5,
                        right:5,
                        top:5,
                        bottom:5
                    }
                }
            }


        })
        /*********** 3*/
    var ch4 =$('#chart4');
    var chart4 = new Chart(ch4,{
        type:'bar',
        data:{
              labels:['1','2','3','4','5','6','7'],

              datasets:[{
                  data:[90,40,120,160,180,190,145],
                  backgroundColor:'#3ed561',
                  borderColor:'#fff' ,
                  pointBackgroundColor:'#fff',
              }]
              
          },
        options:{
                scales:{
                    yAxes:[{display:false}],
                    xAxes:[{display:false}]
                },
                legend:{display:false},
                layout:{
                    padding:{
                        left:5,
                        right:5,
                        top:5,
                        bottom:5
                    }
                }
            }


        })
        /*********** 4*/
    var vi =$('#visit');
    var visit = new Chart(vi,{
        type:'line',
        data:{
              labels:['1','2','3','4','5','6','7'],

              datasets:[{
                  data:[90,40,120,160,180,190,145],
                  backgroundColor:'',
                  borderColor:'#17a2b8' ,
                  pointBackgroundColor:'#17a2b8',
              },{
                  data:[130,125,135,150,120,130,145],
                  backgroundColor:'',
                  borderColor:'#ffc107' ,
                  pointBackgroundColor:'#ffc107',
            }
            
            ]
              
          },
        options:{
                scales:{
                    yAxes:[{display:true}],
                    xAxes:[{display:true}]
                },
                legend:{display:true},
                layout:{
                    padding:{
                        left:5,
                        right:5,
                        top:5,
                        bottom:5
                    }
                }
            }


        })
        /*********** 4*/
    
})