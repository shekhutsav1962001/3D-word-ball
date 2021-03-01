$(document).ready(function () {
  createBall()
});



// skillls 3d ball
function createBall() {
    var entries = [

        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'jQuery' },
        { label: 'Typescript' },
        { label: 'Node.js' },
        { label: 'Express.js' },
        { label: 'Angular' },
        { label: 'Bootstrap' },
        { label: 'Python' },
        { label: 'Django' },
        { label: 'PHP' },
        { label: 'C' },
        { label: 'C++' },
        { label: 'C#' },
        { label: 'Java' },
        { label: 'Dart' },
        { label: 'Flutter' },
        { label: 'MySQL' },
        { label: 'MongoDB' },
        { label: 'SQLite' },
        { label: 'EF Core' },
        { label: '.NET Core' },
        { label: 'ASP.NET' },
        { label: 'Github' },


    ];

    var settings = {

        entries: entries,
        width: 1500,
        height: 550,
        radius: '90%',
        radiusMin: 100,
        bgDraw: true,
        bgColor: '#060b1b',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 1000,
        speed: 0.5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '18',
        fontColor: '#f1f1f1',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: false,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $('#holder').svg3DTagCloud(settings);

}
